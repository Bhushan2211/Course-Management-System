import { Button } from 'bootstrap';
import React, { Fragment } from 'react';

const AddCourse=()=> {
    return (
        <div className='max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-10'>
            <h2 className='text-2x1 font-bold mb-4 text-center'>Add Course</h2>
            <form>
                <div className='mb-3'>
                <label for="title" className='block text-gray-700 text-sm font-bold mb-2'>Course Name</label>
                <input className='w-full px-4 py-2 border rounded-lg focus:outline-none focus-ring-2 focus:ring-blue-400' type='text' id="title" />
                </div>
                 <div className='mb-3'>
                 <label for="description" className='block text-gray-700 text-sm font-bold mb-2'>Course Description</label>
                 <textarea className='w-full px-4 py-2 border rounded-lg focus:outline-none focus-ring-2 focus:ring-blue-400' id="description"></textarea>
                 </div>
                 <div className='mb-3 text-center'>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400' type="submit">Add Course</button>
                 </div>
                
            </form>
        </div>
    )
}

export default AddCourse;