export function createNodesEdgesForVueD3Network(
  members,
  topics,
  members_topics
) {
  let nodes = [];
  let memberNames = {};

  // Add a node for each member
  for (const member of members) {
    nodes.push({
      _cssClass: "Member",
      _labelClass: "memberLabel",
      name: member.username,
      id: `member-${member.id}`,
      submittedAd: member.created_at,
    });
    memberNames[member.id] = member.username;
  }

  // Add a node for each topic
  for (const topic of topics) {
    nodes.push({
      _cssClass: "Skill",
      _labelClass: "skillLabel",
      name: topic.name,
      id: `topic-${topic.id}`,
      sharerNames: [],
      learnerNames: [],
    });
  }

  const edges = [];
  const counter = { learners: {}, sharers: {} };

  // Iterate over only those rows of members_topics that have a learner.
  // Create an edge joining these.
  // We have to add the names later but don't have them yet. We'll update separately
  // below.
  for (const topic of members_topics.filter((item) => item.learner)) {
    edges.push({
      type: "learn",
      _color: "#f1955b",
      sid: `member-${topic.learner}`,
      tid: `topic-${topic.topic}`,
      _svgAttrs: { "stroke-width": "2", opacity: 0.5 },
    });
    counter.learners[`topic-${topic.topic}`] = counter.learners[
      `topic-${topic.topic}`
    ] || { count: 0, names: [] };
    counter.learners[`topic-${topic.topic}`].count++;
    counter.learners[`topic-${topic.topic}`].names.push(
      memberNames[topic.learner]
    );
  }

  // Iterate over only those rows of members_topics that have a sharer.
  // Create an edge joining these.
  for (const share of members_topics.filter((item) => item.sharer)) {
    edges.push({
      type: "share",
      _color: "#9f78e4",
      sid: `member-${share.sharer}`,
      tid: `topic-${share.topic}`,
      _svgAttrs: { "stroke-width": "2", opacity: 0.5 },
    });
    counter.sharers[`topic-${share.topic}`] = counter.sharers[
      `topic-${share.topic}`
    ] || { count: 0, names: [] };
    counter.sharers[`topic-${share.topic}`].count++;
    counter.sharers[`topic-${share.topic}`].names.push(
      memberNames[share.sharer]
    );
  }

  // Adds the totals for learnerNames and learnerCounts.
  for (const [topic, detail] of Object.entries(counter.learners)) {
    const indexToReplace = nodes.findIndex((el) => el.id === topic);
    const topicToUpdate = nodes[indexToReplace];
    topicToUpdate.learnerCount = detail.count;
    topicToUpdate.learnerNames = detail.names;
    nodes.splice(indexToReplace, 1);
    nodes.push(topicToUpdate);
  }

  // Adds the totals for sharerNames and sharerCounts.
  for (const [topic, detail] of Object.entries(counter.sharers)) {
    const indexToReplace = nodes.findIndex((el) => el.id === topic);
    const topicToUpdate = nodes[indexToReplace];
    topicToUpdate.sharerCount = detail.count;
    topicToUpdate.sharerNames = detail.names;
    nodes.splice(indexToReplace, 1);
    nodes.push(topicToUpdate);
  }

  return { edges, nodes };
}
