import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import EntitiesResult from './EntitiesResult';
import SentimentResult from './SentimentResult';
import SummaryResult from './SummaryResult';
import KeywordsResult from './KeywordsResult';
import ThemesResult from './ThemesResult';
import QuickSentimentResult from './QuickSentimentResult';
import TopicsResult from './TopicsResult';
import TranslateResult from './TranslateResult';
import QAResult from './QAResult';
import CategoriesResult from './CategoriesResult';

export default ({ results }) => (
  <>
    <br />
    <Tabs>
      <TabList>
        { results.namedEntities && <Tab>Entities</Tab> }
        { results.sentiment && <Tab>Sentiment</Tab> }
        { results.summary && <Tab>Summary</Tab> }
        <Tab>Translate</Tab>
        <Tab>Q & A</Tab>
        { results.topics && <Tab>Topics</Tab> }
        { results.quick_sentiment && <Tab>Quick Sentiment</Tab> }
        { results.keywords && <Tab>Keywords</Tab> }
        { results.themes && <Tab>Themes</Tab> }
        { results.categories && <Tab>Categories</Tab> }
      </TabList>

      { results.namedEntities &&
        <TabPanel>
          <EntitiesResult entities={ results.namedEntities } />
        </TabPanel>
      }
      { (results.entities && results.sentiment) &&
        <TabPanel>
          <SentimentResult
            entities={ results.entities }
            sentiment={ results.sentiment}
          />
        </TabPanel>
      }
      { results.sentiment &&
        <TabPanel>
          <h3>Score: {results.sentiment}</h3>
        </TabPanel>
      }
      { results.summary &&
        <TabPanel>
          <SummaryResult summary={ results.summary } />
        </TabPanel>
      }
      
      <TabPanel>
        <TranslateResult />
      </TabPanel>      
      <TabPanel>
        <QAResult />
      </TabPanel>

      { results.topics &&
        <TabPanel>
          <TopicsResult topics={ results.topics } />
        </TabPanel>
      }

      { results.quick_sentiment &&
        <TabPanel>
          <QuickSentimentResult 
            quickSentiment={results.quick_sentiment} />
        </TabPanel>
      }      
      { results.keywords &&
        <TabPanel>
          <KeywordsResult keywords={ results.keywords } />
        </TabPanel>
      }

      { results.themes &&
        <TabPanel>
          <ThemesResult themes={ results.themes } />
        </TabPanel>
      }

      { results.categories &&
        <TabPanel>
          <CategoriesResult categories={ results.categories } />
        </TabPanel>
      }

    </Tabs>
  </>
);
