<template >
  <div class="search_panel">
      <select class="search_panel_select">
        <option value="grapefruit">Repositories</option>
      </select>
      <select class="search_panel_select" onChange={onChangeSelect} ref={selectRef}>
        <option value="JavaScript">JavaScript</option>
        <option value="css">css</option>
        <option value="Html">Html</option>
        <option value="php">php</option>
        <option value="ruby">ruby</option>
        <option value="c++">c++</option>
        <option value="c#">c#</option>
        <option value="python">python</option>
        <option value="java">java</option>
        <option value="go">go</option>
        <option value="haskel">haskel</option>
      </select>
      <input type="text" class="search_panel_input" ref={inputRef} value={props.filterTag} onChange={onChangeInput} />
      <button class="search_panel_button" onClick={downloadRepos}>Search</button>
    </div>
</template>
<style scoped>
.search_panel{
    width: 80%;
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
}
.search_panel_select{
    width: 20%;
    border:none;
    border-bottom: 1.2px solid blue;
    font-size: 1.1rem;
}
.search_panel_select:focus{
    outline: none;
}
.search_panel_input{
    border:none;
    border-bottom: 1.2px solid blue;
    font-size: 1.1rem;
}
.search_panel_input:focus{
    outline: none;
    border-bottom: 2px solid blue;
}
.search_panel_button{
    color: white;
    text-transform: uppercase;
    width: 120px;
    height: 35px;
    background-color: blue;
    border: none;
    font-size: 1.2rem;
}
</style>