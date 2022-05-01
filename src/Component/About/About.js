import React from 'react';

const About = () => {
    return (
        <div className='container' style={{ height: '400px' }}>
            <div className="row pt-5 pb-5">
                <div className="col-12">
                    <h3 style={{ color: 'darkcyan' }} className='text-center pb-3'>WANT TO KNOW MORE ABOUT US? </h3>
                    <p style={{ color: 'darkcyan' }}>Inventory management has become one of the key elements of the supply chain management and can greatly affect the performance of a business. The textile industry is no exception. Traditional approaches in decision making based on manager instincts and hunches are no longer enough in the today's increasingly competitive environment. Small to medium sized family owned textile businesses are usually prone to this way of thinking. This paper discusses some basic concepts and techniques for classifying inventory, controlling inventory levels, avoiding stock outs and increasing customer satisfaction. It also discusses the importance of forecasting demand and uses the Root Mean Square Error (RMSE) as an effective measure of the forecast error, which later becomes a basic driver for inventory management. It addresses the Service Level (SL) as a performance metric and emphasizes on the importance of Safety Stock (SS). Finally, it discusses the use of the Reorder Point (ROP) as an efficient indicator for triggering production replenishment and proposes a simple technique for prioritizing production orders.</p>
                </div>
            </div>
        </div>
    );
};

export default About;