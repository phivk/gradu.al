const matter = require("gray-matter");
const ics = require("ics");
const communities = require("./communities");
const fs = require("fs");

console.log(communities)
// get all events
communities.forEach(community => {
  if (!fs.existsSync(`./static/${community.name}`)) {
    fs.mkdirSync(`./static/${community.name}/`);
  }
  fs.readdir(`./content/${community.name}/sessions`, (err, files) => {
    if (err) {
      console.error("Could not list the directory.", err);
      process.exit(1);
    }

    files.forEach((file, index) => {
      const content = fs.readFileSync(`./content/${community.name}/sessions/${file}`)
      const frontMatter = matter(content).data
      if (new Date(frontMatter.date) < new Date()) {
        return console.log(`${frontMatter.title} has passed. Not creating a calendar event`)
      }
      const eventDate = new Date(frontMatter.date)
      console.log(eventDate, eventDate.getFullYear(),
        eventDate.getMonth() + 1,
        eventDate.getDate(),
        eventDate.getHours(),
        eventDate.getMinutes())
      const event = {
        start: [
          eventDate.getFullYear(),
          eventDate.getMonth() + 1,
          eventDate.getDate(),
          eventDate.getHours(),
          eventDate.getMinutes()
        ],
        duration: getDuration(frontMatter.duration),
        title: frontMatter.title,
        description: `A ${frontMatter.type} event.`,
        location: "On Zoom - find link on the #skillsharing channel on Slack"
      };

      ics.createEvent(event, (error, value) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log(`Created event for ${frontMatter.title}.`)
        fs.writeFileSync(`./static/${community.name}/${file.split(".md")[0]}.ics`, value)
      });
    })
  })
})



const YAML = `---
title: How to create magical dinner experiences
type: salon
date: '2021-03-12'
imageSrc: https://munchies-images.vice.com/wp_upload/Tafel-wilddineren.jpg?crop=1xw:0.8434256055363322xh;center,center&resize=1800:*
learnerNames:
  - '@Gunnar de Jong'
  - '@Phivk'
  - '@Omar Shehata'
  - '@Douglas Arellanes'
  - '@Kevin'
sharerNames:
  - '@Thomas Steigenga'
resources:
  -
    text: Website
    href: https://www.wilddineren.nl/
---`;

const parsed = matter(YAML).data;
const eventDate = new Date(parsed.date);

const event = {
  start: [
    eventDate.getFullYear(),
    eventDate.getMonth(),
    eventDate.getDay(),
    eventDate.getHours(),
    eventDate.getMinutes()
  ],
  duration: getDuration(parsed.duration),
  title: parsed.title,
  description: `A ${parsed.type} event.`,
  location: "On Zoom - find link on the #skillsharing channel on Slack"
};

ics.createEvent(event, (error, value) => {
  if (error) {
    console.log(error);
    return;
  }

  // console.log(value);
  // writeFileSync(`${__dirname}/event.ics`, value)
});

function getDuration(inputMinutes = null) {
  if (!inputMinutes) {
    return { hours: 1, minutes: 0 }
  }
  const hours = Math.floor(minutes / 60)
  const minutes = inputMinutes - hours * 60
  return { hours, minutes }
}
