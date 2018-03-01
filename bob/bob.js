var Bob = function() { };

Bob.prototype.hey = function(msg) {
  // no lowercase
  if (!msg.match(/.*[a-z].*/g)) {
    if (msg.match(/.*[A-Z].*/g)) {
      return 'Whoa, chill out!';
    } else {
      if (msg.match(/.*\.\s*$/g)) {
        // stating something
        return 'Whatever.';
      } else if (msg.match(/.*\?\s*$/g)) {
        // asking a question
        return 'Sure.';
      } else if (msg.match(/.*\!\s*$/g)) {
        // talking forcefully
        return 'Whatever.';
      } else {
        if (msg === '' || msg.match(/^(\s)+$/g)) {
          return 'Fine. Be that way!';
        } else {
          return 'Whatever.';
        }
      }
    }
  } else {
    // at least one lowercase
    if (msg.match(/.*\.\s*$/g)) {
      // stating something
      return 'Whatever.';
    } else if (msg.match(/.*\?\s*$/g)) {
      // asking a question
      return 'Sure.';
    } else if (msg.match(/.*\!\s*$/g)) {
      // talking forcefully
      return 'Whatever.';
    } else {
      return 'Whatever.';
    }
  }
};

module.exports = Bob;
