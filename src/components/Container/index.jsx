const Container = ({children, css}) => {
    const styles ={
        maxWidth: "1200px",
        width: "95%",
        margin:"0 auto",
        ...css,
    };
    return <div style={styles}>{children}</div>;
    
};
export default Container;