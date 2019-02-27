import React from 'react';
import MainPage from './MainPage';
import API from '../../utils/API';
import categories from '../../categories.json';
import SubNav from '../../components/SubNav';

// const nullCategory = {
//   categoryName: '',
//   categoryDisplayName: '',
//   categoryDescription: '',
//   categoryTags: [],
//   categorySettings: null,
// }

class MainPageContainer extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      // ...nullCategory
    };
  };

  // componentDidMount() {
  //   this.fetchData()
  // }

  // componentDidUpdate(prevProps) {
  //   if (this.props.match.params.categoryName !== prevProps.match.params.categoryName) {
  //     this.fetchData();
  //   }
  // }

  // fetchData() {
  //   const p = this.props
  //   const categoryName = (p.match && p.match.params.categoryName) || null
  //   if (categoryName) {
  //     return API.getCategory(categoryName)
  //       .then(category => {
  //         this.setState({
  //           categoryName: category.name,
  //           categoryDisplayName: category.displayName,
  //           categoryDescription: category.description,
  //           categoryTags: category.tags,
  //           categorySettings: category.settings
  //         })
  //       })
  //   } else {
  //     this.setState({ ...nullCategory })
  //   }
  // }

  render() {
    return (
    <React.Fragment>
      <div className='flex flex-wrap flex-row items-center justify-center bg-darkest-gray'>
        {categories.map(category => (
          <SubNav
            id={category.id}
            key={category.id}
            href={category.href}
            name={category.name}
          />
        ))}
      </div>
      <MainPage {...this.state} />
    </React.Fragment>
    )
  }
}

export default MainPageContainer;