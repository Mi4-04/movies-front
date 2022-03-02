import styled from 'styled-components'
import tw from 'twin.macro'

interface IItemProps{
    isChecked:  boolean;
}

export const GenreItemContainer = styled.div<IItemProps>(props => [
    tw` inline-block rounded border border-solid  m-1 self-center`,
    props.isChecked && tw`border-green-800 bg-green-800 text-white`
])

export const GenreName = styled.div`
${tw `text-center  pl-2 pr-2`}
`

export const Container = styled.div`

${tw` flex items-center inline-block  pl-3`}
`
