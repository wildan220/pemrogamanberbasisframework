import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVital from './reportWebVitals';

import BlogPost from './container/BlogPost/BlogPost';
import PostMahasiswa from './container/PostMahasiswa/PostMahasiswa';

ReactDOM.render(<PostMahasiswa/>, document.getElementById('content'));

reportWebVital();