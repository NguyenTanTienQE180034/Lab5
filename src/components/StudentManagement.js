import React, { useState } from 'react';

const StudentManagement = () => {
    const [students, setStudents] = useState([
        { name: 'Nguyen Van A', code: 'CODE12345', status: 'Active', selected: true },
        { name: 'Tran Van B', code: 'CODE67890', status: 'In-active', selected: false }
    ]);
    const [studentName, setStudentName] = useState('');
    const [studentCode, setStudentCode] = useState('');
    const [stillActive, setStillActive] = useState(false);

    const addStudent = () => {
        if (!studentName || !studentCode) return; 
        const newStudent = {
            name: studentName,
            code: studentCode,
            status: stillActive ? 'Active' : 'In-active',
            selected: true
        };
       
        setStudents([newStudent, ...students]);
        setStudentName('');
        setStudentCode('');
        setStillActive(false);
    };

    const clearAllStudents = () => {
        setStudents([]); 
    };

    const deleteStudent = (index) => {
        const newStudents = students.filter((_, i) => i !== index);
        setStudents(newStudents);
    };

    const toggleSelect = (index) => {
        const newStudents = [...students];
        newStudents[index].selected = !newStudents[index].selected;
        setStudents(newStudents);
    };

    const toggleStatus = (index) => {
        const newStudents = [...students];
        newStudents[index].status = newStudents[index].status === 'Active' ? 'In-active' : 'Active';
        setStudents(newStudents);
    };

    const totalSelected = students.filter(student => student.selected).length;

    const filteredStudents = stillActive ? students.filter(student => student.status === 'Active') : students;

    return (
        <div className="max-w-4xl mx-auto bg-white p-8">
            <h1 className="text-2xl font-semibold mb-4">Total Selected Student: {totalSelected}</h1>
            <div className="flex items-center mb-4">
                <input
                    type="text"
                    placeholder="Student Name"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="border border-gray-300 rounded px-4 py-2 mr-2 w-1/3"
                />
                <input
                    type="text"
                    placeholder="Student Code"
                    value={studentCode}
                    onChange={(e) => setStudentCode(e.target.value)}
                    className="border border-gray-300 rounded px-4 py-2 mr-2 w-1/3"
                />
                <button onClick={addStudent} className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
                <button onClick={clearAllStudents} className="bg-red-500 text-white px-4 py-2 rounded ml-2">Clear</button>
            </div>
            <div className="mb-4">
                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        checked={stillActive}
                        onChange={() => setStillActive(!stillActive)}
                        className="form-checkbox"
                    />
                    <span className="ml-2">Show Only Active Students</span>
                </label>
            </div>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="py-2 border border-gray-300 text-center">Select</th>
                        <th className="py-2 border border-gray-300 text-center">Student Name</th>
                        <th className="py-2 border border-gray-300 text-center">Student Code</th>
                        <th className="py-2 border border-gray-300 text-center">Status</th>
                        <th className="py-2 border border-gray-300 text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStudents.map((student, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className="py-2 border border-gray-300 text-center">
                                <input type="checkbox"
                                    checked={student.selected}
                                    onChange={() => toggleSelect(index)}
                                    className="form-checkbox"
                                />
                            </td>
                            <td className="py-2 border border-gray-300 text-center">{student.name}</td>
                            <td className="py-2 border border-gray-300 text-center">{student.code}</td>
                            <td className="py-2 border border-gray-300 text-center">
                                <span
                                    className={`px-2 py-1 rounded ${student.status === 'Active' ? 'bg-blue-200 text-blue-800' : 'bg-red-200 text-red-800'}`}
                                    onClick={() => toggleStatus(index)}
                                >
                                    {student.status}
                                </span>
                            </td>
                            <td className="py-2 border border-gray-300 text-center">
                                <button onClick={() => deleteStudent(index)} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentManagement;