import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinners from './Spinners'
import PropTypes from 'prop-types'
import { propTypes } from 'react-bootstrap/esm/Image'
import InfiniteScroll from "react-infinite-scroll-component";





export default class News extends Component {

    static defaultProps = {
        pageSize: 30,
        category: "general"
    }

    static propTypes = {
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super()
        this.state = {
            articles: [],
            page: 1,
            loading: false,
            count: 0
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b7a3ee1582de4a4c8e88cd4090df41ac&pagesize=100`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsdata = await data.json();
        console.log(parsdata);
        this.setState({
            articles: parsdata.articles,
            totalResults: parsdata.totalResults,
            loading: false
        })
    }

    // prevclick = async () => {
    //     console.log("previous");
    //     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b7a3ee1582de4a4c8e88cd4090df41ac&page= ${this.state.page - 1}&pagesize=${this.props.pageSize}`
    //     let data = await fetch(url);
    //     let parsdata = await data.json();
    //     this.setState({ loading: true })
    //     console.log(parsdata);
    //     this.setState({
    //         page: this.state.page - 1,
    //         articles: parsdata.articles,
    //         loading: false,
    //         totalResults:0

    //     })

    // }
    // nextclick = async () => {
    //     console.log("next");
    //     if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

    //     } else {
    //         let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b7a3ee1582de4a4c8e88cd4090df41ac&page= ${this.state.page + 1}&pagesize=${this.props.pageSize}`
    //         let data = await fetch(url);
    //         let parsdata = await data.json();
    //         console.log(parsdata);
    //         this.setState({ loading: true })
    //         this.setState({
    //             page: this.state.page + 1,
    //             articles: parsdata.articles,
    //             loading: false
    //         })
    //     }
    // }

     fetchMoreData = async()=>{
        this.setState({page:this.state.page + 1})
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b7a3ee1582de4a4c8e88cd4090df41ac&pagesize=100`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsdata = await data.json();
        console.log(parsdata);
        this.setState({
            articles: this.state.articles.concat(parsdata.articles),
            totalResults: parsdata.totalResults,
            loading: false,
            // page:this.state.page + 1
        })

        
    }

    //   extra practice of other functions
    //   counter = ()=>{
    //     console.log("called");
    //      this.setState({
    //         count:this.state.count+1
    //     })
    //   }




    render() {



        return (
            <>
                {/* <div className="container my-3"> */}
                    {/* {this.state.loading && <Spinners />} */}

                    {/* <div className="row"> */}
                        <h2 className='text-center'> News -Top Headlines</h2>
                        <InfiniteScroll
                            dataLength={this.state.articles.length}
                            next={this.fetchMoreData}
                            hasMore={this.state.articles.length !== this.state.totalResults}
                            loader={<Spinners/>}
                        >
                            <div className="container">
                                <div className="row">

                            {this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element ? element.title : ""} description={element.description} imageUrl={element ? element.urlToImage : "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/12/iPhone-camera-settings.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1"} newsUrl={element.url} />
                                </div>
                            })}
                            
                                </div>
                            </div>
                        </InfiniteScroll>
                    {/* </div> */}
                    {/* <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.prevclick}> &larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.nextclick}>Next &rarr; </button>
                    </div> */}
                {/* </div> */}



                {/* <p>You clicked me {this.state.count} Times</p>
                <button onClick={this.counter}>click Me</button> */}
            </>
        )
    }
}


// let url = https://newsapi.org/v2/top-headlines?country=in&${this.props.category}&apiKey=b7a3ee1582de4a4c8e88cd4090df