import React from 'react'

export const Description = () => {
    return (
        <>
            <div>
                <p className='text-center font-semibold text-3xl'>Pavise: AI-Driven Tumor Diagnostic Agent </p>
            </div>
            <div className='flex justify-center items-center'>
                <img className="w-96 outline outline-1 outline-white mt-4 mb-4" src="/img/y731.jpg" />
            </div>
            <div className='container mx-auto'>
                <p className='text-justify'>In the ever-evolving battle against cancer, precision and speed are the keys to saving lives. Pavise stands at the forefront of this fight—a cutting-edge AI-driven tumor diagnostic agent designed to revolutionize early detection and analysis.
                    Harnessing the power of advanced machine learning and medical imaging, Pavise provides unparalleled accuracy in identifying tumors, empowering doctors with faster, more reliable insights. By reducing diagnostic uncertainty and enhancing decision-making, it paves the way for personalized treatment strategies, ultimately improving patient outcomes.
                    With Pavise, the future of tumor diagnosis is not just intelligent—it’s life-saving.
                </p>
            </div>
        </>
    )

}
export default Description;