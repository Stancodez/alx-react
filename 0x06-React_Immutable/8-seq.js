import { Seq } from 'immutable';

/**
 * Filters and prints the best students from an object of student grades
 * @param {Object} students - The object containing student grades
 */
export function printBestStudents(students) {
  // Convert the students object to an Immutable Seq for efficient filtering
  const bestStudents = Seq(students)
    // Filter students with score >= 70
    .filter(student => student.score >= 70)
    // Capitalize the first letter of both first and last names
    .map(student => ({
      score: student.score,
      firstName: capitalize(student.firstName),
      lastName: capitalize(student.lastName),
    }));

  // Convert the result back to a plain JavaScript object and print it
  console.log(bestStudents.toJS());
}

/**
 * Helper function to capitalize the first letter of a string
 * @param {string} str - The string to capitalize
 * @returns {string} - The string with the first letter capitalized
 */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

