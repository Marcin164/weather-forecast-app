import React from 'react'

type Props = {
  onChange:(e:React.ChangeEvent<HTMLInputElement>) => any
}

const SearchInput = (props: Props) => {
  return (
    <div className="w-full p-2 flex justify-center"><input type="text" className="bg-white/20 rounded p-2 outline-0" onChange={props.onChange}/></div>
  )
}

export default SearchInput