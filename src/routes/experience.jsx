import Navigation from "./nav"
import Footer from "./footer"
export default function Experience(){
    return(
        <div className='bg-[#1D1E20] font-mono'>
            <Navigation/>
            <body>

                <div className="w-3/6 mx-auto mt-4 ">
                    {/* <p className='text-gray-300 text-md pt-3 pl-1 mt-12'>Experiences:</p> */}
                </div>   
                <div className="w-3/6 mx-auto mt-8">
                    <h1 className='text-emerald-200 text-2xl font-bold '>Executive | KBC IT Club</h1>
                    <p className='text-gray-300 text-md pt-3 pl-1'>
                        <ul>
                            <li>&#8226; Time: Sep 2023 - Present </li>
                            <li>&#8226; Organization: <a href="https://www.linkedin.com/company/kbc-it-club/" target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400">KBC IT Club</a></li>

                        </ul>
                    </p>
                    <p className='text-gray-300 text-md pt-3 pl-1'>Actively contributed to organizing tech events, fostering collaboration among members, and promoting IT awareness, while developing and improving my strong organizational and leadership abilities.</p>
                </div>

                <div className="w-3/6 mx-auto mt-8">
                    <h1 className='text-emerald-200 text-2xl font-bold '>CR | AWS Cloud Club TU</h1>
                    <p className='text-gray-300 text-md pt-3 pl-1'>
                        <ul>
                            <li>&#8226; Time: Feb 2024 - Present </li>
                            <li>&#8226; Organization: <a href="https://www.linkedin.com/company/aws-cloud-club-nepal/posts/?feedView=all" target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400">AWS Cloud Club TU</a></li>

                        </ul>
                    </p>
                    <p className='text-gray-300 text-md pt-3 pl-1'>
                    Facilitated communication between AWS Cloud Club - TU and my college, promoting AWS initiatives and increasing student engagement. I helped organize workshops and events to raise awareness of cloud computing and encourage active participation within the college community.</p>
                </div>

                <div className="w-3/6 mx-auto mt-8">
                    <h1 className='text-emerald-200 text-2xl font-bold '>CR | CSIT Association of Nepal</h1>
                    <p className='text-gray-300 text-md pt-3 pl-1'>
                        <ul>
                            <li>&#8226; Time: Nov 2022 - Oct 2023 </li>
                            <li>&#8226; Organization: <a href="https://csitan.org.np/" target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400">CSIT Association of Nepal</a></li>

                        </ul>
                    </p>
                    <p className='text-gray-300 text-md pt-3 pl-1'>Promoted events, coordinated activities, and fostered connections between students and the IT industry, enhancing community engagement.</p>
                </div>

                
            

            </body>
    
            <Footer/>
      </div>
    )
}