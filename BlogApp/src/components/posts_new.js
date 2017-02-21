import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { createPost } from '../actions/index';

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  onSubmit(props) {
    // createPost is an action and returbns a promise.
    this.props.createPost(props)
      .then(() => {
        // Blog post has been created navigate to the IndexRoute
        // We navigate by calling this.context.router.push with the
        // new path to navigate to.
        this.context.router.push('/');
      });
  }

  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a New Post</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" className="form-control" {...title} />
          <div className="text-help">
            { title.touched ? title.error : '' }
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label htmlFor="categoires">Categories</label>
          <input id="categoires" type="text" className="form-control" {...categories} />
          <div className="text-help">
            { categories.touched ? categories.error : '' }
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label htmlFor="content">Content</label>
          <textarea id="content" rows="10" className="form-control" {...content} />
          <div className="text-help">
            { content.touched ? content.error : '' }
          </div>
        </div>

        <button className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title';
  }

  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }

  if (!values.content) {
    errors.content = 'Enter some content';
  }

  return errors;
}

// connect: first argument is mapStateToProps, 2nd is mapDisptachToProps
// reduxForm : 1st is form config, 2nd is mapStateToProps, 3rd is mapDisptachToProps
export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate,
}, null, { createPost })(PostsNew);
