class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }
    
    //componentWillMount() {
    //    const xhr = new XMLHttpRequest();
    //    xhr.open('get', this.props.url, true);
    //    xhr.onload = () => {
    //        const response = JSON.parse(xhr.responseText);
    //        this.setState({ data: response });
    //    };
    //    xhr.send();
    //}
    handleCommentSubmit(comment) {
        const data = new FormData();
        data.append('Author', comment.Author);
        data.append('Text', comment.Text);

        const xhr = new XMLHttpRequest();
        xhr.open('post', this.props.submitUrl, true);
        xhr.onload = () => this.loadCommentsFromServer();
        xhr.send(data);
    }
    loadCommentsFromServer() {
        const xhr = new XMLHttpRequest();
        xhr.open('get', this.props.url, true);
        xhr.onload = () => {
            const resp = JSON.parse(xhr.responseText);
            this.setState({ data: resp });
        };
        xhr.send();
    }
    componentDidMount() {
        this.loadCommentsFromServer();
        window.setInterval(
            () => this.loadCommentsFromServer(),
            this.props.pollInterval
        );
    }
    render() {
        return (
            <div className="commentBox">
                <CommentList data={this.state.data}/>
                <hr />
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
}

class CommentList extends React.Component {
    render() {
        const commentNodes = this.props.data.map(comment => (
            <Comment author={comment.Author} key={comment.Id}>
                {comment.Text}
            </Comment>
        ));
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
}

class Comment extends React.Component {
    rawMarkup() {
        const md = new Remarkable();
        const rawMarkup = md.render(this.props.children.toString());
        return { __html: rawMarkup };
    }
    render() {
        return (
            <div className="comment">
                <h3 className="commentAuthor">{this.props.author}</h3>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        );
    }
}

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { author: '', text: '' };
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleAuthorChange(e) {
        this.setState({ author: e.target.value });
    }
    handleTextChange(e) {
        this.setState({ text: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        const author = this.state.author.trim();
        const text = this.state.text.trim();
        if (!text || !author) {
            return;
        }
        //send request to the server via parent component
        this.props.onCommentSubmit({ Author: author, Text: text });
        this.setState({ author: '', text: '' });
    }
    render() {
        return (
            <div className="commentForm" onSubmit={this.handleSubmit}>
                <h4>Add Comments:</h4>
                <form className="commentForm">
                    <input type="text"
                        placeholder="Your name"
                        value={this.state.author}
                        onChange={this.handleAuthorChange} />
                    <input type="text"
                       placeholder="Say something..."
                       value={this.state.text}
                       onChange={this.handleTextChange} />
                    <input type="submit" value="Post" />
                </form>
            </div>
        );
    }
}

ReactDOM.render(<CommentBox 
                    url="/Home/GetComments" 
                    submitUrl="/Home/AddComment"
                    pollInterval={2000} 
                />,
                document.getElementById('content'));

//const data = [
//    { Id: 1, Author: 'Daniel Lo Nigro', Text: 'Hello ReactJS.NET World!' },
//    { Id: 2, Author: 'Pete Hunt', Text: 'This is one comment' },
//    { Id: 3, Author: 'Jordan Walke', Text: 'This is *another* comment' },
//];
//ReactDOM.render(<CommentBox data={data} />, document.getElementById('content'));