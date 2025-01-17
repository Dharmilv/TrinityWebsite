import '../../CSS/ThemePage.css'
import jalLogo from './logos/jalLogo.png'
import prithviLogo from './logos/prithviLogo.png'
import vidyutLogo from './logos/vidyutLogo.png'
import agniLogo from './logos/agniLogo.png'
import vayuLogo from './logos/vayuLogo.png'
import samayLogo from './logos/samayLogo.png'

export const Theme= ()=>{
    return (
        <div className='content'>

            <div className="jal">
                <div className='text-jal'>
                    <h1 className="jalText">
                        Jal
                    </h1>
                    <h3 className="department">
                        Information Technology
                    </h3>
                </div>
                <div className="jalImage">
                    <img src={jalLogo} alt="jalLogo" />
                </div>
            </div>
            
            
            <div className="prithvi">
                <div className="prithviImage">
                    <img src={prithviLogo} alt="prithviLogo" />
                </div>
                <div className='text-prithvi'>
                    <h1 className="prithviText">
                        Prithvi
                    </h1>
                    <h3 className="department">
                        Allied
                    </h3>
                </div>
            </div>

            <div className="vidyut">
                <div className="vidyutImage">
                    <img src={vidyutLogo} alt="vidyutLogo" />
                </div>
                <div className='text-vidyut'>
                    <h1 className="vidyutText">
                        Vidyut
                    </h1>
                    <h3 className="department">
                        Mechanical
                    </h3>
                </div>
            </div>
            
            
            <div className="agni">
                <div className="agniImage">
                    <img src={agniLogo} alt="agniLogo" />
                </div>
                <div className='text-agni'>
                    <h1 className="agniText">
                        Agni
                    </h1>
                    <h3 className="department">
                        Computer Science
                    </h3>
                </div>
            </div>
            
            
            <div className="vayu">
                <div className='text-vayu'>
                    <h1 className="vayuText">
                        Vayu
                    </h1>
                    <h3 className="department">
                        EXTC
                    </h3>
                </div>
                <div className="vayuImage">
                    <img src={vayuLogo} alt="vayuLogo" />
                </div>
            </div>
            
            
            <div className="samay">
                <div className='text-samay'>
                    <h1 className="samayText">
                        Samay
                    </h1>
                    <h3 className="department">
                        Data Science
                    </h3>
                </div>
                <div className="samayImage">
                    <img src={samayLogo} alt="samayLogo" />
                </div>
            </div>

        </div>
    );
}