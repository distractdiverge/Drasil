OpenCMS
=======

A C# based CMS, similar to wordpress in simplicity


* A main goal is to design a content management system, thats it, the system should not care how the content is consumed.
* The content should be exposed through web services, and can be consumed by javascript, ios, etc
* The backend must be flexible, we need to be able to swap out data storage modules
* there should be an optional data caching module. again, it should be able to be swapped out.



# Why?
* Most Content Management systems out there provide some crazy way to get the content from the system, to the site, this is a waste when you want full control over how content is rendered, so why not just have an admin export the content as web services?
