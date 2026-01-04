import React from "react";
import TutorialLayout from "./TutorialLayout";
import TutorialContent from "./TutorialContent";

const EconomicBasicsTutorial: React.FC = () => {
  const content = (
    <>
      <p className="lead">
        Economic basics form the foundation for understanding how economies function. These fundamental concepts are essential for government exam preparation, especially for UPSC, banking, and other competitive exams.
      </p>

      <h2>Basic Economic Concepts</h2>

      <h3>Economics and Its Branches</h3>
      <ul>
        <li><strong>Economics:</strong> The study of how societies allocate scarce resources to satisfy unlimited wants</li>
        <li><strong>Microeconomics:</strong> Studies individual economic units (consumers, firms, markets)</li>
        <li><strong>Macroeconomics:</strong> Studies the economy as a whole (national income, inflation, unemployment)</li>
      </ul>

      <h3>Factors of Production</h3>
      <ul>
        <li><strong>Land:</strong> Natural resources (land, water, minerals)</li>
        <li><strong>Labor:</strong> Human effort in production</li>
        <li><strong>Capital:</strong> Man-made resources used in production (machinery, buildings)</li>
        <li><strong>Entrepreneurship:</strong> Organization and risk-taking ability</li>
      </ul>

      <div className="bg-accent p-4 rounded-md my-4">
        <h3 className="font-bold mb-2">Economic Systems</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Capitalism:</strong> Private ownership, market-determined prices, profit motive</li>
          <li><strong>Socialism:</strong> State ownership of means of production, central planning</li>
          <li><strong>Mixed Economy:</strong> Elements of both capitalism and socialism (like India)</li>
          <li><strong>Command Economy:</strong> Government controls production and distribution</li>
          <li><strong>Market Economy:</strong> Private enterprises and market forces determine economic activities</li>
        </ul>
      </div>

      <h2>Demand and Supply</h2>

      <h3>Demand</h3>
      <ul>
        <li><strong>Definition:</strong> Quantity of a good that consumers are willing and able to buy at various prices</li>
        <li><strong>Law of Demand:</strong> Price and quantity demanded are inversely related</li>
        <li><strong>Determinants of Demand:</strong> Price, income, preferences, prices of related goods, expectations</li>
        <li><strong>Elasticity of Demand:</strong> Responsiveness of quantity demanded to changes in price, income, or prices of other goods</li>
      </ul>

      <h3>Supply</h3>
      <ul>
        <li><strong>Definition:</strong> Quantity of a good that producers are willing and able to sell at various prices</li>
        <li><strong>Law of Supply:</strong> Price and quantity supplied are directly related</li>
        <li><strong>Determinants of Supply:</strong> Price, technology, input prices, government policies, expectations</li>
        <li><strong>Elasticity of Supply:</strong> Responsiveness of quantity supplied to changes in price</li>
      </ul>

      <h3>Market Equilibrium</h3>
      <p>
        Market equilibrium occurs when quantity demanded equals quantity supplied. At this point, there is no tendency for price to change.
      </p>

      <table className="w-full border-collapse border border-gray-300 my-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Market Condition</th>
            <th className="border border-gray-300 p-2">Description</th>
            <th className="border border-gray-300 p-2">Effect on Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">Excess Demand</td>
            <td className="border border-gray-300 p-2">Quantity demanded &gt; Quantity supplied</td>
            <td className="border border-gray-300 p-2">Price rises</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Excess Supply</td>
            <td className="border border-gray-300 p-2">Quantity supplied &gt; Quantity demanded</td>
            <td className="border border-gray-300 p-2">Price falls</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Equilibrium</td>
            <td className="border border-gray-300 p-2">Quantity demanded = Quantity supplied</td>
            <td className="border border-gray-300 p-2">Price stable</td>
          </tr>
        </tbody>
      </table>

      <h2>National Income Concepts</h2>

      <p>
        National income accounting measures the economic performance of a country:
      </p>

      <h3>Key National Income Aggregates</h3>
      <ul>
        <li><strong>Gross Domestic Product (GDP):</strong> Total value of goods and services produced within a country's borders in a specific time period</li>
        <li><strong>Gross National Product (GNP):</strong> GDP + Net factor income from abroad</li>
        <li><strong>Net National Product (NNP):</strong> GNP - Depreciation</li>
        <li><strong>National Income (NI):</strong> NNP at factor cost</li>
        <li><strong>Personal Income (PI):</strong> Income received by households before direct taxes</li>
        <li><strong>Disposable Income:</strong> Personal income after direct taxes</li>
      </ul>

      <h3>Methods of Calculating National Income</h3>
      <ul>
        <li><strong>Product/Output Method:</strong> Sum of value added in all sectors</li>
        <li><strong>Income Method:</strong> Sum of all factor incomes (wages, rent, interest, profit)</li>
        <li><strong>Expenditure Method:</strong> Sum of all final expenditures (C + I + G + (X-M))</li>
      </ul>

      <h2>Money and Banking</h2>

      <h3>Functions of Money</h3>
      <ul>
        <li><strong>Medium of Exchange:</strong> Facilitates buying and selling</li>
        <li><strong>Measure of Value:</strong> Provides a common unit for measuring value</li>
        <li><strong>Store of Value:</strong> Allows saving for future use</li>
        <li><strong>Standard of Deferred Payment:</strong> Enables credit transactions</li>
      </ul>

      <h3>Banking System</h3>
      <ul>
        <li><strong>Central Bank:</strong> Issues currency, regulates money supply, banker to the government</li>
        <li><strong>Commercial Banks:</strong> Accept deposits, provide loans, create credit</li>
        <li><strong>Credit Creation:</strong> Process by which banks create money through loans</li>
        <li><strong>Monetary Policy:</strong> Central bank's actions to control money supply and interest rates</li>
      </ul>

      <div className="bg-accent p-4 rounded-md my-4">
        <h3 className="font-bold mb-2">Monetary Policy Tools</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Bank Rate:</strong> Interest rate at which central bank lends to commercial banks</li>
          <li><strong>Cash Reserve Ratio (CRR):</strong> Percentage of deposits banks must keep with central bank</li>
          <li><strong>Statutory Liquidity Ratio (SLR):</strong> Percentage of deposits banks must maintain in liquid assets</li>
          <li><strong>Open Market Operations:</strong> Buying/selling government securities to control money supply</li>
          <li><strong>Repo Rate:</strong> Rate at which central bank lends short-term to banks</li>
          <li><strong>Reverse Repo Rate:</strong> Rate at which central bank borrows from banks</li>
        </ul>
      </div>

      <h2>Inflation and Unemployment</h2>

      <h3>Inflation</h3>
      <ul>
        <li><strong>Definition:</strong> Sustained increase in general price level</li>
        <li><strong>Types:</strong> Demand-pull, Cost-push, Structural</li>
        <li><strong>Measurement:</strong> Consumer Price Index (CPI), Wholesale Price Index (WPI)</li>
        <li><strong>Effects:</strong> Reduces purchasing power, redistributes income, affects economic growth</li>
      </ul>

      <h3>Unemployment</h3>
      <ul>
        <li><strong>Definition:</strong> Situation where people willing and able to work cannot find jobs</li>
        <li><strong>Types:</strong> Frictional, Structural, Cyclical, Seasonal</li>
        <li><strong>Measurement:</strong> Unemployment rate (unemployed persons as percentage of labor force)</li>
        <li><strong>Effects:</strong> Loss of output, social problems, fiscal burden</li>
      </ul>

      <h2>International Trade</h2>

      <p>
        International trade refers to the exchange of goods and services across national boundaries:
      </p>

      <ul>
        <li><strong>Basis of Trade:</strong> Comparative advantage, absolute advantage</li>
        <li><strong>Balance of Payments:</strong> Record of all economic transactions between residents of a country and the rest of the world</li>
        <li><strong>Exchange Rate:</strong> Price of one currency in terms of another</li>
        <li><strong>Trade Policies:</strong> Free trade, protectionism (tariffs, quotas, subsidies)</li>
        <li><strong>International Organizations:</strong> WTO, IMF, World Bank</li>
      </ul>

      <div className="bg-primary/10 p-4 rounded-md my-6">
        <h3 className="font-bold mb-2">Example Question</h3>
        <p className="mb-2">Which of the following is NOT a function of money?</p>
        <ol className="list-decimal pl-5 mb-4">
          <li>Medium of exchange</li>
          <li>Store of value</li>
          <li>Measure of value</li>
          <li>Means of production</li>
        </ol>
        <p className="font-semibold">Answer: 4. Means of production</p>
        <p className="text-sm mt-2">
          Explanation: The four main functions of money are: medium of exchange, store of value, measure of value, and standard of deferred payment. "Means of production" refers to physical, non-human inputs used in production (like factories, machines) and is not a function of money.
        </p>
      </div>
    </>
  );

  return (
    <TutorialLayout activeTopicId="basics">
      <TutorialContent
        title="Economic Basics"
        content={content}
        nextTutorial={{
          title: "Indian Economy",
          path: "/tutorials/economy/indian-economy",
        }}
      />
    </TutorialLayout>
  );
};

export default EconomicBasicsTutorial;
