const matter = require("gray-matter");
const ics = require("ics");
const communities = require("./communities");
const fs = require("fs");

// get all events
communities.forEach(community => {
  if (!fs.existsSync(`./static/${community.name}`)) {
    fs.mkdirSync(`./static/${community.name}/`);
  }

  console.log(`Generating events for ${community.name}.`);
  fs.readdir(`./content/${community.name}/sessions`, (err, files) => {
    if (err) {
      console.error("Could not list the directory.", err);
      process.exit(1);
    }

    files.forEach((file, index) => {
      const content = fs.readFileSync(
        `./content/${community.name}/sessions/${file}`
      );
      const frontMatter = matter(content).data;
      if (new Date(frontMatter.dateTime) < new Date()) {
        return console.log(
          `"${frontMatter.title}" has passed. Not creating a calendar event.`
        );
      }

      if (!frontMatter.dateTime) {
        return console.log("Not creating event for template.");
      }
      const eventDate = new Date(frontMatter.dateTime);

      const event = {
        start: [
          eventDate.getFullYear(),
          eventDate.getMonth() + 1, // Months are zero indexed
          eventDate.getDate(),
          eventDate.getHours(),
          eventDate.getMinutes()
        ],
        duration: getDuration(frontMatter.durationInMinutes),
        title: frontMatter.title,
        description: `A ${frontMatter.type} event.`,
        location: frontMatter.location || community.defaultLocation
      };

      ics.createEvent(event, (error, value) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log(`Created event for "${frontMatter.title}".`);
        fs.writeFileSync(
          `./static/${community.name}/${file.split(".md")[0]}.ics`,
          value
        );
      });
    });
  });
});

function getDuration(inputMinutes = null) {
  if (!inputMinutes) {
    return { hours: 1, minutes: 0 };
  }
  const hours = Math.floor(inputMinutes / 60);
  const minutes = inputMinutes - hours * 60;
  return { hours, minutes };
}
