export default function ValueComp({ label, countData, increment }) {
    return (
        <div className="valueComp">
            {label}
            <div style={{ display: 'flex' }}>
                <button onClick={() => (increment(label, -1))} className="incrementButton">-1</button>
                <div style={{ margin: 'auto', width: '2rem' }}>{countData ? countData[label] || 0 : 0}</div>
                <button onClick={() => (increment(label, 1))} className="incrementButton">+1</button>
            </div>
        </div>
    )
}