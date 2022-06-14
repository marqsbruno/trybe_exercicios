import React from "react";

class God extends React.Component{
  render() {
    const { value , handleChange } = this.props
    return (
      <label>
        Quem é Deus?
        <textarea 
        name='god' rows='10' cols='33' 
        value={value} 
        onChange={handleChange} 
        placeholder="RESPONDE AGORA!">
        </textarea>
    </label>
    )
  }
}
export default God;