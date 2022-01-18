import React,{useState} from 'react'
import { HeaderWrapper, FormWrapper } from './headerStyle';
import { BsSearch } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { fetchWeatherAction } from '../../Redux/Actions/action';




const Header = () => {
    
  const [term,setTerm] = useState<string>('')
   
  const dispatch = useDispatch()

  const handleSubmit = (e:any) => {
    e.preventDefault();
    dispatch(fetchWeatherAction(term))

  }


  return (
    <HeaderWrapper>
       <FormWrapper onSubmit={handleSubmit}>
            <input type="text" className="search-bar" value={term}  onChange={(e) => setTerm(e.target.value)} placeholder="search" />
           <button >
                <BsSearch className='button'/>
            </button>
      </FormWrapper>
        
        </HeaderWrapper>
  )
}

export default Header
