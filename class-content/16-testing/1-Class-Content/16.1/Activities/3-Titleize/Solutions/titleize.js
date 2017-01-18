'use strict';

var titleize = function (name) {
  // Feel free to add more.
  var titles = ['mr', 'dr', 'ms', 'mrs'],
    names = name.split(' ');

  // Transform to guarantee consistency
  for (var i = 0; i < names.length; i += 1) {
    var name = names[i];

    names[i] = title_case(name.toLowerCase());
  }

  // Check if title needs transformation
  var potential_title = names[0];
  if (titles.includes(potential_title.toLowerCase())) {
    var length = potential_title.length;
    
    if (potential_title[length - 1] !== '.')
      names[0] = potential_title + '.';
  }

  return names.join(' ');
}

// Helper function, to keep titleize nice and clean.
function title_case (name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

module.exports = titleize;
