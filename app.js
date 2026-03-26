
const heading = React.createElement('h1',{id:"heading"},"hello world from react");
const para = React.createElement('para',{},"i am a paragraph")
const bold = React.createElement('b',{},para)
const childdiv = React.createElement('div',{id:"child"},[heading,bold ])
const parentdiv = React.createElement('div',{id:"parent"},childdiv)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parentdiv) // it will convert that javascript object into tag

//jsx - to create html element
//react is know as a library because it can be applied even for a small portion of a code.