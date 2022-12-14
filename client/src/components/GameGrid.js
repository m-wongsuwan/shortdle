import React from "react";
import { Context } from "../context";

export default function GameGrid(props) {

    const {currentGuess, gridValues, answers, currentRow} = React.useContext(Context)

    const absentStyle = {backgroundColor: "rgb(163, 173, 189)"}
    const correctStyle = {backgroundColor: "rgb(79, 173, 96)"}
    const wrongPlacementStyle = {backgroundColor: "rgb(245, 217, 42)"}

    function tableCell(rowNum, colNum) {
        if (gridValues.findIndex(guess => guess === answers[props.gridNum]) > -1) {
            if (rowNum <= gridValues.findIndex(guess => guess === answers[props.gridNum]) ){
                if (gridValues[rowNum][colNum].toUpperCase() === answers[props.gridNum][colNum].toUpperCase()) {
                    return <td style={correctStyle}>{gridValues[rowNum][colNum]}</td>
                } else if (gridValues[rowNum][colNum].toUpperCase() === answers[props.gridNum][0].toUpperCase()){
                    return <td style={wrongPlacementStyle}>{gridValues[rowNum][colNum]}</td>
                } else if (gridValues[rowNum][colNum].toUpperCase() === answers[props.gridNum][1].toUpperCase()){
                    return <td style={wrongPlacementStyle}>{gridValues[rowNum][colNum]}</td>
                } else if (gridValues[rowNum][colNum].toUpperCase() === answers[props.gridNum][2].toUpperCase()){
                    return <td style={wrongPlacementStyle}>{gridValues[rowNum][colNum]}</td>
                } else if (gridValues[rowNum][colNum].toUpperCase() !== answers[props.gridNum][colNum].toUpperCase()) {
                    return <td style={absentStyle}>{gridValues[rowNum][colNum]}</td>
                } else {
                    return <td style={wrongPlacementStyle}>{gridValues[rowNum][colNum]}</td>
                }
            } else {
                return <td style={{backgroundColor: "rgb(227, 242, 253)"}}></td>
            }
        } else if (currentRow > rowNum) {
            if (gridValues[rowNum][colNum].toUpperCase() === answers[props.gridNum][colNum].toUpperCase()) {
                return <td style={correctStyle}>{gridValues[rowNum][colNum]}</td>
            } else if (gridValues[rowNum][colNum].toUpperCase() === answers[props.gridNum][0].toUpperCase()){
                return <td style={wrongPlacementStyle}>{gridValues[rowNum][colNum]}</td>
            } else if (gridValues[rowNum][colNum].toUpperCase() === answers[props.gridNum][1].toUpperCase()){
                return <td style={wrongPlacementStyle}>{gridValues[rowNum][colNum]}</td>
            } else if (gridValues[rowNum][colNum].toUpperCase() === answers[props.gridNum][2].toUpperCase()){
                return <td style={wrongPlacementStyle}>{gridValues[rowNum][colNum]}</td>
            } else if (gridValues[rowNum][colNum].toUpperCase() !== answers[props.gridNum][colNum].toUpperCase()) {
                return <td style={absentStyle}>{gridValues[rowNum][colNum]}</td>
            } else {
                return <td style={wrongPlacementStyle}>{gridValues[rowNum][colNum]}</td>
            }
        } else if (currentRow === rowNum) {
            return <td>{currentGuess[colNum]}</td>
        } else {
            return <td>{gridValues[rowNum][colNum]}</td>
        }
    }

    return(
        <>
            
            {/* <button onClick={()=>console.log(`current Row: ${currentRow} `)}>current row</button> */}
            <table className="grids">
                {/* <col width="30px" />
                <col width="30px" />
                <col width="30px" /> */}
                <tbody>
                    <tr>
                        {tableCell(0, 0)}
                        {tableCell(0, 1)}
                        {tableCell(0, 2)}
                    </tr>
                    <tr>
                        {tableCell(1, 0)}
                        {tableCell(1, 1)}
                        {tableCell(1, 2)}
                    </tr>
                    <tr>
                        {tableCell(2, 0)}
                        {tableCell(2, 1)}
                        {tableCell(2, 2)}
                    </tr>
                    <tr>
                        {tableCell(3, 0)}
                        {tableCell(3, 1)}
                        {tableCell(3, 2)}
                    </tr>
                    <tr>
                        {tableCell(4, 0)}
                        {tableCell(4, 1)}
                        {tableCell(4, 2)}
                    </tr>
                    <tr>
                        {tableCell(5, 0)}
                        {tableCell(5, 1)}
                        {tableCell(5, 2)}
                    </tr>
                    <tr>
                        {tableCell(6, 0)}
                        {tableCell(6, 1)}
                        {tableCell(6, 2)}
                    </tr>
                    <tr>
                        {tableCell(7, 0)}
                        {tableCell(7, 1)}
                        {tableCell(7, 2)}
                    </tr>
                    <tr>
                        {tableCell(8, 0)}
                        {tableCell(8, 1)}
                        {tableCell(8, 2)}
                    </tr>
                </tbody>
                
            </table>
        
        </>
    )
}