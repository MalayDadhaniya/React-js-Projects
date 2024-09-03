function Clock_time() {

    let time = new Date;
    return (
        <p>This is the currunt Time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}.</p>
    );
}

export default Clock_time;