---
layout: post
title: "Part one a Guide to Processing Unprocessed Space Telescope"
date: "2024-01-21"
categories: [astronomy]
published: true
---

There are a variety of ways for researchers to access JWST data of interest, including the MAST Discovery Portal (hereafter, Portal), which is the primary web interface for discovering, visualizing, assessing, and retrieving archived data. The portal also provides access to ancillary and engineering data related to the observations. Users may evaluate contemporaneous calibration reference data that were used to remove the instrumental signature from the science data products.

# Part one: A Guide to Processing Unprocessed Space Telescope Images with Siril and FITS Liberator

## Tools Used

In this guide, I will be utilizing several open-source software tools to filter, stack, and align my images.

1. - [**Siril**](https://siril.org/){:target="_blank"}: A sophisticated tool designed for astrophotography image processing.

2. - [**FITS Liberator**](https://www.spacetelescope.org/projects/fits_liberator/){:target="_blank"}: Provides a platform for advanced image enhancement and visualization.

3. - [**GIMP**](https://www.gimp.org/){:target="_blank"}: A versatile graphics editor for adding the finishing artistic touches to your astronomical image.

4. - [**WEBB Telescope**](https://webbtelescope.org/home){:target="_blank"}: Helps find pictures and PID of images for searching.

> **Note:** Make sure to download and install these tools before proceeding with the guide.

---

### Step 1: Accessing the MAST Portal

Using [webtelescope.org](https://webbtelescope.org/), find the image you want to search for in the MAST portal. For my guide, I will be using a Uranus Close-up image, taken with the Webb's NIRCAM. - [WEBB TELESCOPE](https://webbtelescope.org/contents/media/images/2023/150/01HHFNNWQTA69J6K680PVZN4A1){:target="_blank"}

From here, we want to take a couple of different notes on the Image and its description. Under fast facts in the data description category, we want to look for and mark down what's called the proposal id. For our image, it is 2739.

In astronomical observations, researchers submit proposals outlining the scientific goals, target objects, and observation parameters they wish to achieve using telescopes or space-based observatories. The proposal undergoes a review process, and if approved, the telescope is scheduled to collect data based on the submitted plan.

With our proposal id, we now want to go to the bottom of the image and take note of the different filters that the NIRCAM used to take the photos.

For our image, it uses the following, F140M, F210M, F300M, F460M.

**Proposal id -** 2739

**Filters -** F140M, F210M, F300M, F460M

Now we want to go over to the MAST portal. In the top left corner of the site under the search menu, go to advanced search.

- [MAST Portal](https://mast.stsci.edu/portal/Mashup/Clients/Mast/Portal.html){:target="_blank"}

From here, we are only going to be entering information for only a few of these fields to find our images.

Under the mission box, type in **JWST**.

You should see upwards of 200,000 Images you're able to search. However, you're only to parse through 50,000 images at a time, and even that amount is too much just to find the 4 Pictures that we need.

Under Proposal ID, we can enter the one that gathered from the Webb Telescope's actual image. After the PID is entered, our results go from over 200,000 down to just 80, and we are now able to go to the top right corner, and the search feature will be available to us because our results are under 50,000.

Now, we're able to search for our specific image from the 80 results we have. The 80 results would be mostly information from whatever the team that was studying using the JWST would have collected for their project.

In this menu, we are able to do a couple of things using the filter category to the left of the screen to help narrow down our results.

Under instrument, we know that the telescope took this picture using the NIRCAM, so we're able to search for images used with that instrument. This brings our search down to just 70 images.

Because we're looking for a picture of Uranus, we can use the target classification field. It would have to fall under planets or solar system. Seeing how the image is labeled for Uranus, we will use the planet option, and this brings our results down to just 10.

From the 10 results we now have, we can go to the top of the search page and go to album view. Here we can see the unrendered images in the raw filters, based on our image we got from NASA and the four different filters we need to make that image, we just look for the correct filter.

We now need to determine which filters we want to download. Press the floppy disk icon for the desired filter data sets to download a specific filter’s data set.

My advice is to select as many filters as possible within the range for your object **F140M to F460M**. However, do not select duplicate filters; you only need one observation of a filter. It is better to start with more and greater variety rather than less. 5-6 is probably sufficient.

Some downloads take up to 4 or 5 GB of storage per data set. So it is advised that you clear some storage before downloading your files.

There are ways to only get our fits files and one image per set of the observation, but for my guide, I am doing a full breakdown of the data collection sets.

When you download the files from a filter, each package of files should be compressed into its own .zip folder.

You need to extract each filter’s zip folder. Make sure you extract the contents to a location that you know. You will need to have easy access to individual files in these folders in the next set of steps.

Create a new folder in the same location. Name the folder “i2d-Fits”. After creating the new folder, go back to the extracted folders. You now need to locate the correct file in each extracted folder. It should have a suffix something like “filter_i2d.fits”. Go into each of the extracted folders and copy these i2d.fits files to your new “i2d-fits” folder.

In my next article, I will be going over preparing the photos and converting them into a tif format using FITSliberator, then aligning the filters and images using Siril, and eventually, my last guide will be the final product of my image fully rendered and resembling the same thing as you would see on the JWST site.



























































































