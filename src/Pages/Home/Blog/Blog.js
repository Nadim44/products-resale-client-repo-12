import React from 'react';

const Blog = () => {
    return (
        <div className='m-4'>
            <div className=' bg-orange-400 rounded-lg mb-4 p-4'>
                <h1 className='text-xl text-semibold  ' >
                    Q:- What are the different ways to manage a state in a React application?
                </h1>
                <p>
                    Answer:- The Four Kinds of React State to Manage.
                    1. Local state. 2. Global state. 3. Server state. 4. URL state.
                </p>
            </div>
            <div className=' bg-orange-400 rounded-lg mb-4 p-4'>
                <h1 className='text-xl text-semibold  ' >
                    Q:- How does prototypical inheritance work?
                </h1>
                <p>
                    Answer:- The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.
                </p>
            </div>
            <div className=' bg-orange-400 rounded-lg mb-4 p-4'>
                <h1 className='text-xl text-semibold  ' >
                    Q:- What is a unit test? Why should we write unit tests?
                </h1>
                <p>
                    Answer:- A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. when you write test you take the perspective of the one that will consume your code.
                </p>
            </div>
            <div className=' bg-orange-400 rounded-lg mb-4 p-4'>
                <h1 className='text-xl text-semibold  ' >
                    Q:- React vs. Angular vs. Vue?
                </h1>
                <p>
                    Answer:- Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.
                </p>
            </div>
        </div>
    );
};

export default Blog;