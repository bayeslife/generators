# Bayeslife Generators

Javascript has the concept of [generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators).

They are a general concept which can be applied to many domains that might have been solved without generators.
Pretty much any code which returns data could be written in terms of the generator concept.
A generator is pretty much the 'stream' interface.  Your code will just get an infinite set of values flowing into it which you will need to handle.

Given that generators are relatively new and a highly applicable concept, there is the question on whether it is appropriate to always implement data access through the generator approach.  What would be the consequences, benefits, drawbacks and limitations of such an approach.

The consequences should include:
- focus on an keeping track of state through potentially infinite incremental updates


In order to figure out how useful generators are it would seem appropiate to have an opinated library that attempts to provided generators for all sorts of things.  This list can include:
- produce infinite stream of events related to new entries or updates to an xslx file
- produce infinite stream of events related to new entries or updates to an eventhub
- produce infinite stream of events related to new entries in a csv files in a directory
- produce infinite stream of events related to new entries in a relational database
- produce infinite stream of events related to new entries in a no-sql database
