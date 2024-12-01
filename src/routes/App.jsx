import MemorizedNavBar from './nav';
import Footer from './footer';
import '../App.css'
function App() {
  return (
    <div className='bg-[#1D1E20] font-mono'>
      <MemorizedNavBar/>
      <body>
        <div className="w-3/6 mx-auto mt-4 ">
            <h1 className='text-emerald-200 text-2xl font-bold mt-16'>Intro</h1>
            <p className='text-gray-300 text-md pt-3 pl-1'>Data science and machine learning student who is enthusiastic and detail-oriented, with a strong foundation in statistical analysis, programming, and data-driven problem-solving. Strong foundations in Python and SQL; assured of delivering actionable insights from data and developing efficient ML solutions to solve real-world problems.

              
            </p>
        </div>
        <div className="w-3/6 mx-auto mt-10">
            <h1 className='text-emerald-200 text-2xl font-bold '>Interests</h1>
            <p className='text-gray-300 text-md pt-3 pl-1'>LLMs, NLP, Predictive Modeling, Deep Learning</p>
        </div>
        <div className="w-3/6 mx-auto mt-10">
  <h1 className="text-emerald-200 text-2xl font-bold">Key Skills</h1>
  <ul className="text-gray-300 text-md pt-3 pl-1">
    <li>⋄ Data Analysis & Visualization (Pandas, NumPy, Matplotlib, Seaborn)</li>
    <li>⋄ Machine Learning (Scikit-learn, TensorFlow)</li>
    <li>⋄ Data Cleaning, Feature Engineering, and Preprocessing</li>
    <li>⋄ Model Training, Evaluation, and Optimization</li>
    <li>⋄ SQL & Database Management</li>
    <li>⋄ Git, Jupyter Notebooks</li>
  </ul>
</div>

        {/* <div className="w-3/6 mx-auto mt-10">
            <h1 className='text-emerald-200 text-2xl font-bold '>Interested to Work/Research on: </h1>
            <p className='text-gray-300 text-md pt-3 pl-1'>
              <ul>
                <li>&#8226; Preconf, Based and Shared Sequencing</li>
                <li>&#8226; Zk Rollups</li>
                <li>&#8226; Zk(Privacy)</li>
              </ul>
            </p>
        </div> */}
        <div className="w-3/6 mx-auto mt-10">
            <h1 className='text-emerald-200 text-2xl font-bold '>Current</h1>
            <p className='text-gray-300 text-md pt-3 pl-1'>Exploring LLM model development, applications in natural language processing (NLP) and machine learning.</p>
        </div>
      </body>

      <Footer/>
    </div>
  )
}

export default App
