const queueMessage = (args) => {
  window._learnq = window._learnq || [];
  window._learnq.push(args);
}

export default {
  queueMessage
};