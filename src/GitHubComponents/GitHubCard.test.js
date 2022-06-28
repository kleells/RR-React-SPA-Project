import GitHubCard from './GitHubCard'
import renderer from 'react-test-renderer'
import App from '../App'

test('renders a snapshot', () => {
  const tree = renderer.create(<GitHubCard />).toJSON()
  expect(tree).toMatchSnapshot()
})