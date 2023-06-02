import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
`

export const Navbar = styled.div`
  margin-top: 0.3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

export const Navlabels = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 1.5rem;
  gap: 2.3rem;
`

export const Separator = styled.span`
  width: 100%;
  height: 0.01rem;
  background-color: ${(props) => props.theme['dark-gray']};
  opacity: 0.8;
`

export const EmblaContainer = styled.div`
  overflow: hidden;
  pointer-events: none;

  .embla__container {
    display: flex;
    max-width: 100vw;
  }
  .embla__slide {
    flex: 0 0 100%;
    max-width: 100vw;
    a {
      pointer-events: initial;
    }
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1.5rem;
  padding: 0 1.5rem;
  width: 100%;
`

export const ItemsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  padding: 0 1.5rem;
  margin-bottom: 2.96rem;
`