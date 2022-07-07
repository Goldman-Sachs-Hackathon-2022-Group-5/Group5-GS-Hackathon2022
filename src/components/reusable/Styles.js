import styled from 'styled-components'
import {
  Row,
  InputNumber,
  Input,
  Card,
  Select,
  Table,
  Col,
  Tabs,
} from 'antd'

export const StyledHeading = styled.h2`
  margin-bottom: 0;
  font-family: Poppins;
  font-size: 20px;
`

export const Container = styled.div`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: 100%;
  display: flex;
  align-items: ${(props) => (props.align ? props.align : 'center')};
  justify-content: flex-start;
  flex-direction: column;
`

export const HorizontalScroll = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  overflow-x: scroll;
`

export const StyledRow = styled(Row)`
  && {
    width: ${(props) => (props.margin ? props.margin : '100%')};
    margin-bottom:  ${(props) => (props.margin ? props.margin : '20px')};
    margin-right: ${(props) => (props.margin ? props.margin : '20px')};
  }
`

export const RowContainer = styled(Row)`
&& {
  display: flex;
  align-items: space-between;
  justify-content: center;
  flex-direction: row;
  width: ${(props) => (props.margin ? props.margin : '100%')};
  margin-top: ${(props) => (props.margintop ? props.margintop : '20px')};
  margin-bottom:  ${(props) => (props.marginbottom ? props.marginbottom : '20px')};
  margin-right: 0 //${(props) => (props.marginright ? props.marginright : '0px')};
  margin-left: ${(props) => (props.marginleft ? props.marginleft : '0px')};
}
`

export const StyledInput = styled(Input)`
  && {
    width: 100%;
    border-radius: 5px;
  }
`

export const StyledInputNumber = styled(InputNumber)`
  && {
    width: 100%;
    border-radius: 5px;
  }
`

export const StyledTextArea = styled(Input)`
  && {
    width: 150%;
    border-radius: 5px;
  }
`

export const StyledSelect = styled(Select)`
  && {
    margin-top: 10px;
    margin-bottom: 10px;
    width: ${(props) => (props.width ? props.width : '100%')};
    & .ant-select-selector {
      border-radius: 5px;
    }
  }
`

export const StyledCard = styled(Card)`
  && {
    width: 100%;
    background-color: #F2F6FE;
  }
`

export const StyledTable = styled(Table)`
  && {
    width: 100%;
    margin-bottom: 20px;
  }
`
export const ContentContainer = styled(Col)`
  && {
    padding: ${(props) => (props.padding ? props.padding : '10px')};
    width: ${(props) => (props.width ? props.width : '100%')};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: ${(props) => (props.alignitems ? props.alignitems : 'flex-start')};
  }
`

export const LeftColumn = styled.div`
  width: 72%;
  height: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const RightColumn = styled(LeftColumn)`
  width: 28%;
  padding-left: 30px;
  margin-top: 55px;
`

export const StyledTabs = styled(Tabs)`
  && {
    width: 100%;
  }
`