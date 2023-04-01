import React from 'react';

const QusAns = () => {
    return (
        <div className='py-12'>
            <h2 className='text-4xl font-semibold'>Quesing ans Answer</h2>
            <div className='py-10'>
            <div>
                <h4 className='text-2xl text-left'>Differentce bewtween props vs state?</h4>
                <p className='text-xl text-left py-6'>Props and state are two crucial ideas in the context of React that are used to handle data in a component-based design. Props, which stands for "properties," are used to transfer data from one component to another. Props are read-only, which means that the child component cannot change them. Instead, it is the parent component's responsibility to update the properties as needed.
                State, on the other hand, describes a component's internal data that the component itself has the ability to change. Data that is distinct to a component and may vary over time, such user input or the outcome of an API request, is managed by state. The setState method, which causes the component and its descendants to be re-rendered, may be used to change state rather than props.
                </p>
            </div>
            <div>
                <h4 className='text-2xl text-left'>How does useState work?</h4>
                <p className='text-xl text-left py-6'>React has a built-in hook called useState that lets functional components control state. UseState returns an array with two values when it is called: the current state value and a function to update the state. The initial state that useState receives as an input is used to initialize the first value.
                </p>
            </div>
            <div>
                <h4 className='text-2xl text-left'>How does React work?</h4>
                <p className='text-xl text-left py-6'>React is a JavaScript front-end toolkit that renders and updates components—reusable UI elements—quickly and effectively using a virtual DOM. Props are used by React to transfer data between components, and the useState hook is used to control state within a component. React automatically refreshes the virtual DOM and causes a re-render of a component when its state changes.
                </p>
            </div>
            <div>
                <h4 className='text-2xl text-left'>What does useEffect do other than loading data?</h4>
                <p className='text-xl text-left py-6'>To implement side effects in functional components, React uses the useEffect hook. In addition to data loading, useEffect may be used for a number of different things, including changing the document title, responding to window or document events, and connecting with APIs.
                </p>
            </div>
            </div>
        </div>
    );
};

export default QusAns;