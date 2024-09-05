const EmptyMessage = ({ items }) => {

    return (
        <>
            {items == 0 && <h3>Im Still Hungree !!!</h3>}
        </>
    );
};

export default EmptyMessage;