import MemorizedNavBar from "./nav"
import Footer from "./footer"
export default function Projects(){
    return(
        <div className='bg-[#1D1E20] font-mono'>
            <MemorizedNavBar/>
            <body>

            <div className="w-3/6 mx-auto mt-4 ">
                <p className='text-gray-300 text-md pt-3 pl-1 mt-12'>List of projects I've built:</p>
            </div>   

            <div className="w-3/6 mx-auto mt-8">
                <h1 className='text-emerald-200 text-2xl font-bold '>Face Detection Based Attendance System</h1>
                <p className='text-gray-300 text-md pt-3 pl-1'>
                    <ul>
                        <li>&#8226; Status: Ongoing</li>
                        <li>&#8226; Repo: <a href="https://github.com/crjanb/Face-Detection-Based-Attendance-System" target="_blank" className="hover:cursor-pointer hover:underline hover:text-emerald-100">https://github.com/crjanb/Face-Detection-Based-Attendance-System</a></li>

                    </ul>
                </p>
                <p className='text-gray-300 text-md pt-3 pl-1'>Real Time face detection based attendance system.</p>
            </div>

            <div className="w-3/6 mx-auto mt-8">
                <h1 className='text-emerald-200 text-2xl font-bold '>Depression Predcition Model</h1>
                <p className='text-gray-300 text-md pt-3 pl-1'>
                    <ul>
                        {/* <li>&#8226; Status: Ongoing</li> */}
                        <li>&#8226; Repo: <a href="https://www.kaggle.com/code/crjanb/why-are-you-depressed" target="_blank" className="hover:cursor-pointer hover:underline hover:text-emerald-100">https://www.kaggle.com/code/crjanb/why-are-you-depressed</a></li>

                    </ul>
                </p>
                <p className='text-gray-300 text-md pt-3 pl-1'>Developed a depression prediction model and tested among Random Forest, Logistic Regression, SVM, and KNN acquired 0.94% accuracy. Evaluated performance and deployed on Streamlit.</p>
            </div>
            <div className="w-3/6 mx-auto mt-8">
                <h1 className='text-emerald-200 text-2xl font-bold '>Vehicle Recognization</h1>
                <p className='text-gray-300 text-md pt-3 pl-1'>
                    <ul>
                        {/* <li>&#8226; Status: Online Voting System</li> */}
                        <li>&#8226; Repo: <a href="https://github.com/crjanb/vehicle_recognization-YOLOv8" target="_blank" className="hover:cursor-pointer hover:underline hover:text-emerald-100">https://github.com/crjanb/vehicle_recognization-YOLOv8</a></li>

                    </ul>
                </p>
                <p className='text-gray-300 text-md pt-3 pl-1'>
                Built a real-time vehicle recognition system using Roboflow for labeling, OpenCV for image processing, and YOLOv8 for detection. The system enables accurate vehicle classification for applications in traffic management and security.</p>
            </div>

           

            <div className="w-3/6 mx-auto mt-8">
                <h1 className='text-emerald-200 text-2xl font-bold '>Movie Recommendation System
                </h1>
                <p className='text-gray-300 text-md pt-3 pl-1'>
                    <ul>
                        {/* <li>&#8226; Live: <a href="https://dyor-one.vercel.app/" target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400">Extension build file</a></li> */}
                        <li>&#8226; Repo: <a href="https://github.com/srijanbakhati/movie_recommender" target="_blank" className="hover:cursor-pointer hover:underline hover:text-emerald-100">https://github.com/srijanbakhati/movie_recommender</a></li>

                    </ul>
                </p>
                <p className='text-gray-300 text-md pt-3 pl-1'>Applies machine learning techniques to recommend movies based on user preferences and historical data.</p>
            </div>

            <div className="w-3/6 mx-auto mt-8">
                <h1 className='text-emerald-200 text-2xl font-bold '>GYM_Analysis</h1>
                <p className='text-gray-300 text-md pt-3 pl-1'>
                    <ul>
                        {/* <li>&#8226; Live: <a href="https://bundle-swap.vercel.app" target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400">https://bundle-swap.vercel.app</a></li> */}
                        <li>&#8226; Repo: <a href="https://www.kaggle.com/code/crjanb/gym-analysis-with-description" target="_blank" className="hover:cursor-pointer hover:underline hover:text-emerald-100">https://www.kaggle.com/code/crjanb/gym-analysis-with-description</a></li>

                    </ul>
                </p>
                <p className='text-gray-300 text-md pt-3 pl-1'>Conducted data analysis on a gym dataset to identify key trends and patterns. Developed visualizations, including a pie chart, barchart, and heatmaps representing gender distribution, to provide actionable insights for targeted marketing strategies and decision-making.</p>
            </div>

            <div className="w-3/6 mx-auto mt-8">
                <h1 className='text-emerald-200 text-2xl font-bold '>Online Voting System</h1>
                <p className='text-gray-300 text-md pt-3 pl-1'>
                    <ul>
                        {/* <li>&#8226; Status: Online Voting System</li> */}
                        <li>&#8226; Repo: <a href="https://github.com/crjanb/Online-Voting-System" target="_blank" className="hover:cursor-pointer hover:underline hover:text-amber-100">https://github.com/crjanb/Online-Voting-System</a></li>

                    </ul>
                </p>
                <p className='text-gray-300 text-md pt-3 pl-1'>Developed a secure e-voting system using Python, featuring a user-friendly interface built with Tkinter.</p>
            </div>

    

            </body>
    
            <Footer/>
      </div>
    )
}
