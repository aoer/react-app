function ComponentSelection({names, UserSelectedCallBack}) {
    const GetSelections = () => {
        return names.map(name => <div className='selection' onClick={() => UserSelectedCallBack(name)}>{name}</div>);
    }
    
    return (
        <div className='component-selection'>
            {GetSelections()}
        </div>
    );
}

export default ComponentSelection;