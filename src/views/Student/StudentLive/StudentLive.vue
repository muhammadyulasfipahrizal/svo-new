<script setup lang="ts">
import { ref } from 'vue';
import type { StudentLive, CommentLive } from './StudentLive.type';
import { studentLiveDummyData, commentLiveDummyData } from './studentLiveDummyData';

const liveList = ref<StudentLive[]>(studentLiveDummyData) 

//comments
const isComment = ref(false);

const toggleComment = () => {
  isComment.value = !isComment.value
}

const commentList = ref<CommentLive[]>(commentLiveDummyData)
</script>

<template>
    <section style="padding: 10px; gap: 10px;">
        <section class="grid w-full">
            <h1 class="inter-normal black-1 col-12" style="font-size: 35px; font-weight: 700; padding: 0px 10px; margin: 10px 0px">LIVE Video</h1>
            <!-- main video -->
            <div v-if="!isComment" class="mb-3 w-full col-12">
                <div class="grid overflow-hidden relative">
                    <iframe class="col-12" :src="liveList[0].url"  frameborder="0" allowfullscreen style="height: 589px"></iframe>
                    <div class="absolute top-0 right-0 p-2 m-2">
                      <div class="flex flex-row align-items-center gap-2">
                        <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M5.28544 4.11517C5.61088 4.44061 5.61088 4.96825 5.28544 5.29368C2.68111 7.89802 2.68111 12.1205 5.28544 14.7248C5.61088 15.0502 5.61088 15.5779 5.28544 15.9033C4.96001 16.2288 4.43237 16.2288 4.10693 15.9033C0.851725 12.6481 0.851725 7.37038 4.10693 4.11517C4.43237 3.78973 4.96001 3.78973 5.28544 4.11517ZM15.8951 4.11517C19.1503 7.37038 19.1503 12.6481 15.8951 15.9033C15.5696 16.2288 15.042 16.2288 14.7166 15.9033C14.3911 15.5779 14.3911 15.0502 14.7166 14.7248C17.3209 12.1205 17.3209 7.89802 14.7166 5.29368C14.3911 4.96825 14.3911 4.44061 14.7166 4.11517C15.042 3.78973 15.5696 3.78973 15.8951 4.11517ZM7.75765 6.50965C8.08309 6.83509 8.08309 7.36273 7.75765 7.68816C6.48185 8.96396 6.48185 11.0324 7.75765 12.3082C8.08309 12.6337 8.08309 13.1613 7.75765 13.4868C7.43222 13.8122 6.90458 13.8122 6.57914 13.4868C4.65247 11.5601 4.65247 8.43633 6.57914 6.50965C6.90458 6.18421 7.43222 6.18421 7.75765 6.50965ZM13.5563 6.50965C15.4829 8.43633 15.4829 11.5601 13.5563 13.4868C13.2308 13.8122 12.7032 13.8122 12.3777 13.4868C12.0523 13.1613 12.0523 12.6337 12.3777 12.3082C13.6535 11.0324 13.6535 8.96396 12.3777 7.68816C12.0523 7.36273 12.0523 6.83509 12.3777 6.50965C12.7032 6.18421 13.2308 6.18421 13.5563 6.50965ZM10.0677 8.8175C10.7581 8.8175 11.3177 9.37715 11.3177 10.0675C11.3177 10.7579 10.7581 11.3175 10.0677 11.3175C9.37734 11.3175 8.8177 10.7579 8.8177 10.0675C8.8177 9.37715 9.37734 8.8175 10.0677 8.8175Z"
                            fill="#BE2F00" />
                        </svg>
                        <div class="view-count" @click="toggleComment" style="cursor: pointer">
                          <i class="pi pi-fw pi-eye"></i>
                          <span class="view-count-text">92</span>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
            <div v-else class="grid mb-3 col-12">
              <div class="grid col-8 overflow-hidden relative ">
                  <iframe class="col-12" :src="liveList[0].url"  frameborder="0" allowfullscreen style="height: 589px"></iframe>
                  <div class="absolute top-0 right-0 p-2 m-2">
                    <div class="flex flex-row align-items-center gap-2">
                      <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M5.28544 4.11517C5.61088 4.44061 5.61088 4.96825 5.28544 5.29368C2.68111 7.89802 2.68111 12.1205 5.28544 14.7248C5.61088 15.0502 5.61088 15.5779 5.28544 15.9033C4.96001 16.2288 4.43237 16.2288 4.10693 15.9033C0.851725 12.6481 0.851725 7.37038 4.10693 4.11517C4.43237 3.78973 4.96001 3.78973 5.28544 4.11517ZM15.8951 4.11517C19.1503 7.37038 19.1503 12.6481 15.8951 15.9033C15.5696 16.2288 15.042 16.2288 14.7166 15.9033C14.3911 15.5779 14.3911 15.0502 14.7166 14.7248C17.3209 12.1205 17.3209 7.89802 14.7166 5.29368C14.3911 4.96825 14.3911 4.44061 14.7166 4.11517C15.042 3.78973 15.5696 3.78973 15.8951 4.11517ZM7.75765 6.50965C8.08309 6.83509 8.08309 7.36273 7.75765 7.68816C6.48185 8.96396 6.48185 11.0324 7.75765 12.3082C8.08309 12.6337 8.08309 13.1613 7.75765 13.4868C7.43222 13.8122 6.90458 13.8122 6.57914 13.4868C4.65247 11.5601 4.65247 8.43633 6.57914 6.50965C6.90458 6.18421 7.43222 6.18421 7.75765 6.50965ZM13.5563 6.50965C15.4829 8.43633 15.4829 11.5601 13.5563 13.4868C13.2308 13.8122 12.7032 13.8122 12.3777 13.4868C12.0523 13.1613 12.0523 12.6337 12.3777 12.3082C13.6535 11.0324 13.6535 8.96396 12.3777 7.68816C12.0523 7.36273 12.0523 6.83509 12.3777 6.50965C12.7032 6.18421 13.2308 6.18421 13.5563 6.50965ZM10.0677 8.8175C10.7581 8.8175 11.3177 9.37715 11.3177 10.0675C11.3177 10.7579 10.7581 11.3175 10.0677 11.3175C9.37734 11.3175 8.8177 10.7579 8.8177 10.0675C8.8177 9.37715 9.37734 8.8175 10.0677 8.8175Z"
                          fill="#BE2F00" />
                      </svg>
                      <div class="view-count" @click="toggleComment" style="cursor: pointer">
                        <i class="pi pi-fw pi-eye"></i>
                        <span class="view-count-text">92</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <VirtualScroller :items="commentList" :itemSize="50" style="height: 525px;">
                    <template v-slot:item="{ item }">
                        <div class="flex flex-row align-items-center" style="gap: 5px; margin-bottom: 20px">
                          <img :src="item.image" alt="" style="width: 50px; border-radius: 40px;
                          height: 50px; box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);">
                          <div style="border-radius: 10px; border: 1px solid #EBEBEB; height: 50px"
                           class="flex align-items-center w-full">
                            <span class="inter-normal black-2" style="padding: 0px 10px; font-size: 14px;
                              font-weight: 400;">{{ item.comment }}</span>
                          </div>
                        </div>
                    </template>
                  </VirtualScroller>
                    <div class="flex flex-row align-items-center" style="gap: 5px">
                      <div style="border-radius: 10px; border: 1px solid #EBEBEB; height: 50px"
                      class="flex align-items-center w-full">
                        <p contenteditable class="inter-normal black-2" style="padding: 0px 10px; font-size: 14px;
                          font-weight: 400;">Comment...</p>
                      </div>
                    </div>
                </div>
            </div>
            <!-- video cards -->
            <div class="col-12 md:col-4 lg:col-4 xl:col-4 min-w-min md:min-w-max" v-for="video in liveList" :key="video.id">
                <div class="border-1 border-round-xl border-300">
                  <div class="flex flex-column gap-2">
                    <div class="flex justify-content-center align-items-center" style="padding-top: 15px">
                      <p class="inter-normal black-1 mr-2" style="font-size: 15px; font-weight: 700;">{{ video.name }}</p>
                    </div>
                    <iframe class="col-12" :src="video.url" frameborder="0" allowfullscreen style="height: 192px"></iframe>
                    <div class="px-2">
                      <div class="flex align-items-center">
                        <!-- live icon -->
                        <div class="flex flex-row justify-content-center align-items-center gap-2">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M5.28544 4.11517C5.61088 4.44061 5.61088 4.96825 5.28544 5.29368C2.68111 7.89802 2.68111 12.1205 5.28544 14.7248C5.61088 15.0502 5.61088 15.5779 5.28544 15.9033C4.96001 16.2288 4.43237 16.2288 4.10693 15.9033C0.851725 12.6481 0.851725 7.37038 4.10693 4.11517C4.43237 3.78973 4.96001 3.78973 5.28544 4.11517ZM15.8951 4.11517C19.1503 7.37038 19.1503 12.6481 15.8951 15.9033C15.5696 16.2288 15.042 16.2288 14.7166 15.9033C14.3911 15.5779 14.3911 15.0502 14.7166 14.7248C17.3209 12.1205 17.3209 7.89802 14.7166 5.29368C14.3911 4.96825 14.3911 4.44061 14.7166 4.11517C15.042 3.78973 15.5696 3.78973 15.8951 4.11517ZM7.75765 6.50965C8.08309 6.83509 8.08309 7.36273 7.75765 7.68816C6.48185 8.96396 6.48185 11.0324 7.75765 12.3082C8.08309 12.6337 8.08309 13.1613 7.75765 13.4868C7.43222 13.8122 6.90458 13.8122 6.57914 13.4868C4.65247 11.5601 4.65247 8.43633 6.57914 6.50965C6.90458 6.18421 7.43222 6.18421 7.75765 6.50965ZM13.5563 6.50965C15.4829 8.43633 15.4829 11.5601 13.5563 13.4868C13.2308 13.8122 12.7032 13.8122 12.3777 13.4868C12.0523 13.1613 12.0523 12.6337 12.3777 12.3082C13.6535 11.0324 13.6535 8.96396 12.3777 7.68816C12.0523 7.36273 12.0523 6.83509 12.3777 6.50965C12.7032 6.18421 13.2308 6.18421 13.5563 6.50965ZM10.0677 8.8175C10.7581 8.8175 11.3177 9.37715 11.3177 10.0675C11.3177 10.7579 10.7581 11.3175 10.0677 11.3175C9.37734 11.3175 8.8177 10.7579 8.8177 10.0675C8.8177 9.37715 9.37734 8.8175 10.0677 8.8175Z"
                              fill="#BE2F00" />
                          </svg>
                          <div>
                            <i class="pi pi-fw pi-eye"></i>
                            <span class="view-count-text">92</span>
                          </div>
                          <i class="pi pi-thumbs-up text-red-500" size="small" link></i>
                          <i class="pi pi-heart-fill text-red-700" size="small" link></i>
                          <p class="text-sm font-900">42k</p>
                        </div>
                      </div>
                      <div class="card-data mb-2">
                        <img src="/assets/img/instructor.png" alt="Profile" class="card-profile"
                          style="width: 50px; height:50px" />
                        <div class="flex flex-column gap-0">
                          <p class="p-0 m-0 inter-normal black-1" style="font-size: 20px; font-weight: 700;">{{ video.details?.title }}</p>
                          <p class="p-0 m-0 inter-normal black-3" style="font-size: 15px; font-weight: 400;">by <span>{{ video.details?.instructor }}</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </section>
    </section>
</template>

<style scoped lang="scss">
@import "/src/assets/global.scss";
.card-row {
  display: flex;
  justify-content: flex-start;
  max-width: 1200px;
  flex-wrap: wrap;
}

.card-header {
  width: 1180px;
  height: 500px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
}

.card-item {
  width: 380px;
  height: 350px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 30px 20px 15px 0;
  position: relative;
}

.card-content {
  text-align: center;
}

.video-container {
  position: relative;
  overflow: hidden;
}

.card-footer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 5px;
}

.card-profile {
  margin-right: 10px;
  width: 40px;
  height: 40px;
}

.upload-icon {
  font-size: 50px;
  flex-direction: row;
}

.upload-text {
  margin-top: 2.5px;
}

.live-icon,
.like-icon,
.love-icon {
  font-size: 15px;
  margin-right: 5px;
}

.view-count {
  border: 1px solid black;
  background: white;
  padding: 6px 8px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.view-count-text {
  font-size: 16px;
  margin: 0 3px;
}

.card-icon {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.card-util {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.card-util i {
  margin: 0 10px;
}

.card-data {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.card-info {
  display: flex;
  flex-direction: column;
}
.card-info p {
  margin: 0;
}

/* Modal Styles */

.modal video {
  max-width: 100%;
  max-height: 100%;
}

.modal-upload-text {
  font-size: 20px;
}

.modal-select-file {
  border: 1px solid #ccc;
  padding: 0 5px;
  border-radius: 5px;
}

.modal-profile {
  width: 50px;
  height: 50px;
}

.modal-video {
  width: 100%;
  height: 400px;
  object-fit: fill;
}

.upload-label {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  height: 200px;
  border: 1px dotted #D9D9D9;
  border-radius: 10px;
}

.upload-label input[type="file"] {
  display: none;
}

.max-file-size {
  margin-top: 5px;
  font-size: 14px;
}

.live-video-details {
  margin-top: 20px;
  font-size: 30px;
  font-weight: bold;
}

.profile-section {
  text-align: start;
}

.profile-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  cursor: pointer;
}

.title-input {
  height: 25px;
  font-size: 14px;
}

.instructor-dropdown {
  margin-left: 10px;
  height: 26px;
}

.instructor-toggle label {
  display: inline-block;
  margin-right: 10px;
}

.save-button {
  display: block;
  width: 100%;
  margin-top: 10px;
  padding: 8px 20px;
  font-size: 16px;
  background-color: #00C0DD;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.modal-input {
  gap: 5px;
}

@media (max-width: 767px) {
  .modal-input {
    gap: 15px;
  }
}

//scrollbar
::-webkit-scrollbar {
  width: 0;
}

::-webkit-scrollbar-thumb {
  display: none;
}
</style>