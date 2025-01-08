import React from 'react';

const Course = ({ course }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4 text-center">
        <h2 className="text-lg font-bold mb-2">{course.title}</h2>
        <p className="text-gray-700">{course.description}</p>
        <div className="mt-4">
          <button className="bg-red-500 text-black px-4 py-2 rounded mr-2 hover:bg-red-600">
            Delete
          </button>
          <button className="bg-blue-500 text-black px-4 py-2 ml-2 rounded hover:bg-blue-600">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
