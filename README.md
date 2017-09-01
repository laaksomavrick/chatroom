# chatroom

This (in-progress) application serves as an exercise to learn React, Redux, and server side JavaScript. It's a simple, canonical chat application.

The application is very rough currently as I've been between ideas on what to implement and how to orient the architecture (I'm used to MVC on the server and using sockets + express with Redux has lent itself to a more event based architecture). 

React + Redux is great. I'd like to use this pattern in my work going forward - the data flow is easy to reason about, and modeling an application in this paradigm leads to a natural separation of concerns (views, events, event handlers).

I specifically chose to use express over a more full fledged solution (ie sails) to cut my teeth with a more minimal framework. Realization: I'm basically implementing something like sails regardless, so next time I'll stick to a cookie cutter framework vs picking and choosing my dependencies.
