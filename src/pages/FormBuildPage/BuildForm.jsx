import React, { useState } from 'react';
import { FaImage } from "react-icons/fa";

const BuildForm = () => {
    const [quiz, setQuiz] = useState([])
    const [category, setCategory] = useState('')

    // different categories 
    const renderCategoryInputs = (category) => {
        switch (category) {
            case "categorize":
                return (
                    <>
                        <h3>Categorize Category</h3>
                        {/* Implement Categorize category inputs */}
                    </>
                );
            case "cloze":
                return (
                    <>
                        <h3>Cloze Category</h3>
                        {/* Implement Cloze category inputs */}
                    </>
                );
            case "comprehension":
                return (
                    <>
                        <h3>Comprehension Category</h3>
                        {/* Implement Comprehension category inputs */}
                    </>
                );
            default:
                return null;
        }
    };

    // handle form submit
    const handleSubmit = event => {
        event.preventDefault()
    }

    // handle add quiz button
    const handleAddQuiz = (category) => {
        setCategory(category)


        const newQuiz = (
            <div key={quiz.length}>
                {renderCategoryInputs(category)}
            </div>
        )
        setQuiz((prevQuiz) => [...prevQuiz, newQuiz])
    }

    return (
        <>
            <form className='build-form-styles' onSubmit={handleSubmit}>
                {/* Form title */}
                <div className='md:flex justify-between items-center'>
                    <h2>From Title:</h2>
                    <input type="text" name="form-title" className='form-input' />
                    <p>Or</p>
                    <div className='flex'>
                        <FaImage className="w-8 me-1 h-8 text-gray-500" />
                        <input
                            type="file"
                            id="image"
                        // onChange={handleImageChange}
                        />
                    </div>
                </div>
                {/* Show Quiz */}
                {
                    quiz.length !== 0 && quiz.map(item => item)
                }
                {/* Add Questions */}
                <div className='text-center my-4 space-x-1 space-y-1'>
                    <button className='primary-btn-small' onClick={() => handleAddQuiz("cloze")}>Add Cloze Quiz</button>
                    <button className='primary-btn-small' onClick={() => handleAddQuiz("categorize")}>Add Categorize Quiz</button>
                    <button className='primary-btn-small' onClick={() => handleAddQuiz("comprehension")}>Add Comprehension Quiz</button>
                </div>
            </form>
        </>
    );
};

export default BuildForm;

