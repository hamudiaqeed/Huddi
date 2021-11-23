import React from 'react';
import Layout from '../components/Layout';

class Category extends React.Component {
    // constructor(){
    //     super();
    // }
    render() {

        const routeParam = this.props.match.params.categoryName

        return(
            <div>
                <Layout>
                    <h1>{routeParam}</h1>
                </Layout>
            </div>
        )
    }
}

export default Category;