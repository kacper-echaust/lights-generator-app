import React from 'react'

const styles = (columns,rows) => {
    return {

        display: 'grid',
        gridTemplateRows: `repeat(${rows},109px)`,
        gridTemplateColumns: `repeat(${columns},109px)`,
        columnGap: '20px',
        rowGap: '20px',
    }
}

const Grid = ({ children,columns, rows }) => {
	return <div style={styles(columns,rows)}>{children}</div>
}

export { Grid }
