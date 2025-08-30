import { Switch } from 'antd';
import React from 'react'
import { useOutletContext } from 'react-router-dom';
import CODE_FORCES_ICON from "../assets/code-forces.svg"
import GEEKS_LOGO from "../assets/geeks.svg"
import CHEF_ICON from "../assets/chefLogo.svg"
import LEETCODE_ICON from "../assets/leetcode-96.png"
const FilterContests = () => {
    const context = useOutletContext()
    const visibleContests = context[0];
const setVisibleContests = context[1];
    const handleFilterGeeksForGeeks = (checked) => {
        if(!checked) setVisibleContests((item) => item.filter(contest => contest !== 'geeksforgeeks' )  )
            else setVisibleContests(prev => 
                prev.includes('geeksforgeeks') ? prev : [...prev, 'geeksforgeeks']
              );
    }
    const handleFilterLeetcode = (checked) => {
        if(!checked) setVisibleContests((item) => item.filter(contest => contest !== 'leetcode' )  )
        else setVisibleContests(prev => 
            prev.includes('leetcode') ? prev : [...prev, 'leetcode']
          );
    }
    const handleFilterAtcoder = (checked) => {
        if(!checked) setVisibleContests((item) => item.filter(contest => contest !== 'atcoder' )  )
        else setVisibleContests(prev => 
            prev.includes('atcoder') ? prev : [...prev, 'atcoder']
          );
    }
    const handleFilterCodeChef = (checked) => {
        if(!checked) setVisibleContests((item) => item.filter(contest => contest !== 'codechef' )  )
        else setVisibleContests(prev => 
            prev.includes('codechef') ? prev : [...prev, 'codechef']
          );
    }
    const handleFilterCodeForces = (checked) => {
        if(!checked) setVisibleContests((item) => item.filter(contest => contest !== 'codeforces' )  )
        else setVisibleContests(prev => 
            prev.includes('codeforces') ? prev : [...prev, 'codeforces']
          );
    }
  return (
    <div className='mx-auto mt-4 flex'>
    <span className='mx-auto flex flex-col'>
    
   <img className=' w-10 mx-auto sm:mx-0  my-auto sm:w-full' src={GEEKS_LOGO} alt="geeks-for-geeks-logo" />
        <Switch checked={visibleContests?.includes('geeksforgeeks')}
onChange={handleFilterGeeksForGeeks} />
        </span>
        <span className='mx-auto flex flex-col'>
        <img className=' mb-auto hidden sm:block   flex-0 max-h-14' width="58" height="48" src={CODE_FORCES_ICON} alt="external-codeforces-programming-competitions-and-contests-programming-community-logo-shadow-tal-revivo"/>
        {/* <img className='mb-0.5 hidden sm:block   flex-0 max-h-14' width="58" height="48"  src="src/assets/code-forces.svg" alt="Codeforces" /> */}
    
        <img className='sm:hidden w-11 my-auto sm:w-14' src={CODE_FORCES_ICON} />
        <Switch checked={visibleContests?.includes('codeforces')}
onChange={handleFilterCodeForces} />
        </span>
        <span className='mx-auto flex flex-col'>
        <img className='my-auto w-10  sm:w-14 mx-auto sm:mx-0' src={CHEF_ICON} alt="logo-codechef" />
        <Switch checked={visibleContests?.includes('codechef')}
onChange={handleFilterCodeChef}/>
        </span>
        <span className='mx-auto flex gap-2 flex-col'>
        <img className='hidden my-auto  sm:block max-h-18  ' width="52" height="58" src={LEETCODE_ICON} alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo"/>
        <img className='  sm:hidden w-10 mt-2 mb-2 sm:w-14' src={LEETCODE_ICON} />
        <Switch checked={visibleContests?.includes('leetcode')}
onChange={handleFilterLeetcode} />
        </span>
        <span className='mx-auto flex flex-col'>
        <img className='my-auto w-10 sm:w-14 max-h-14 mb-3.5' width="56" height="36" src="https://codolio.com/icons/atcoder_dark.png"/>  
         <Switch checked={visibleContests?.includes('atcoder')}
onChange={handleFilterAtcoder} />
        </span>
</div>
  )
}

export default FilterContests
