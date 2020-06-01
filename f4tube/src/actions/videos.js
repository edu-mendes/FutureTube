import axios from 'axios';
import 'firebase/firestore';

const baseUrl = "https://us-central1-f4tube-e7be0.cloudfunctions.net/f4Api"

export const setVideos = (allVideos) => ({
    type: "SET_VIDEOS",
    payload: {
        allVideos,
    }
})

export const getVideos = () => async (dispatch) => { 
    try {
        const response = await axios.get(`${baseUrl}/allVideos`)
        dispatch(setVideos(response.data.videos.videos));

    } catch (error) {
        window.alert("Not Found")
    }
}

export const createVideos = (urlVideo, urlPhotoVideo, title, desc) => async (dispatch) => {
    const videoInformation = {
        urlVideo,
        urlPhotoVideo,
        title,
        desc,
    }

    try{
        await axios.post(`${baseUrl}/createVideo`, videoInformation)
        dispatch(getVideos())
    }catch (err){
        window.alert("Error sending video")
    }
}

export const setRemoveVideo = (videoId) => ({
    type:"REMOVE_VIDEO",
    payload: {
        videoId,
    }
})

export const deleteVideo = (videoId) => async(dispatch) =>{
    try{
        await axios.delete(`${baseUrl}/deleteVideo/${videoId}`)
        dispatch(getVideos())
    }catch(err){
        window.alert("Error when deleting video")
    } 
}

export const setVideoDetails = (videoDetails) =>({
    type: "SET_VIDEO_DETAILS",
    payload: {
        videoDetails,
    }
})

export const getVideosDetails = (videoId) => async (dispatch) => {   
    try {
        const response = await axios.get(`${baseUrl}/videosDetails/${videoId}`)
        dispatch(setVideoDetails(response.data.videosDetails));
    } catch (error) {
        window.alert("Not Found")
    }
}

export const setVideoIdSelected = (videoIdSelected) => ({
    type: "SET_VIDEO_ID",
    payload: {
        videoIdSelected
    }
})

export const editVideo = (title,desc,videoId) => async(dispatch)=>{
    const videoInformation = {
        title,
        desc,
    }
    console.log("testando action change video", videoInformation)
    try{
        await axios.put(`${baseUrl}/alterVideo/${videoId}`, videoInformation)
        dispatch(getVideos())
    }catch{
        window.alert("Error when editing video")
    }
}  
