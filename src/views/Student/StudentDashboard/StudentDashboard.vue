<script setup lang="ts">
import { ref } from 'vue';
import CustomCalendar from '@/views/Student/CustomCalendar/CustomCalendar.vue';
import { format, parse } from 'date-fns';
import CorouselStudentDashboardVue from './Corousel/CorouselStudentDashboard.vue';
import CoursesDashboard from './Courses/CoursesDashboard.vue';

import type {  DailyTask } from './DailyTask/DailyTask.type';
import { dailyTaskDummyData } from './DailyTask/DailyTaskDummyData';
import type { ExamSchedule } from './ExamSchedule/ExamSchedule.type';
import { ExamScheduleDummyData } from './ExamSchedule/ExamSchedueleDummyData'

import { activitiesDummyData } from './Activity/ActivityDummyData';
import type Activities from'./Activity/Activity.type'
const dummyData = [...activitiesDummyData];



const activitiesList = ref<Activities[]>(activitiesDummyData)
const dailyTasks = ref<DailyTask[]>(dailyTaskDummyData)
const examSchedules = ref<ExamSchedule[]>(ExamScheduleDummyData)

const dataEvent = [{
    date: '2023-09-20',
    data: dummyData.splice(0, Math.random() * 10)
}, {
    date: '2023-09-21',
    data: dummyData.splice(0, Math.random() * 10)
}, {
    date: '2023-09-10',
    data: dummyData.splice(0, Math.random() * 10)
}, {
    date: '2023-09-13',
    data: dummyData.splice(0, Math.random() * 10)
},
{
    date: '2023-09-14',
    data: dummyData.splice(0, Math.random() * 10)
},]


const selectedDate = ref<string>(format(new Date(), 'dd-MMM-yyyy'));
const onClickDay = (v: Date) => {
    const date = format(v, 'yyyy-MM-dd').toString();
    selectedDate.value = date;
    const selected = dataEvent.find((event) => event.date === date);
    activitiesList.value = selected ? selected.data : []
}
</script>

<template>
    <section class="grid flex-column md:flex-row">
        <!-- caraousel section -->
        <div class="col-12 p-0 m-0">
            <h1 class="inter-normal black-2" style="font-size: 35px; font-weight: 700; padding-left: 20px">Dashboard</h1>
            <p class="inter-normal black-2" style="font-size: 25px; font-weight: 700; padding: 10px 0px 0px 10px">Events</p>
            <CorouselStudentDashboardVue></CorouselStudentDashboardVue>
        </div>
        <!-- about yourself badge and calender -->
        <div class="grid col-12 m-0">
            <!-- about yourself and daily task section -->
            <!-- about yourself -->
            <div class="col-12 md:col-4 flex flex-column" style="gap: 20px">
                <div class="flex flex-column" style="gap: 20px;">
                    <p class="inter-normal black-2" style="font-size: 25px; font-weight: 700;">About yourself</p>
                    <div class="bg-white input-card">
                            <div class="flex flex-column" style="gap: 10px">   
                                <p class="inter-normal black-2" style="font-size: 20px; font-weight: 700;">Tell us about yourself</p>
                                <div class="flex align-items-center" style="gap: 5px">
                                    <p class="inter-normal black-2 min-w-max" style="font-size: 15px; font-weight: 700;">I am currently a</p>
                                    <InputText label="Enter" class="p-inputtext-sm w-full"
                                            placeholder="Enter..." style="height: 34px"/>
                                </div>
                                <div class="flex align-items-center" style="gap: 5px">
                                    <p class="inter-normal black-2 min-w-max" style="font-size: 15px; font-weight: 700;">I want to be a</p>
                                    <InputText label="Enter" class="p-inputtext-sm w-full"
                                            placeholder="Enter..." style="height: 34px"/>
                                </div>
                                <Button
                                    class=" border-rounded-sm btn-default align-self-end" style="border-radius: 10px
                                    width: 85px; height: 35px; margin-bottom: 10px">
                                    <p class="font-medium">SAVE</p>
                                </Button>
                            </div>
                    </div>
                </div>
            <!-- daily task -->
                <p class="inter-normal black-2" style="font-size: 25px; font-weight: 700;">Daily Task</p>
                <div class="bg-white input-card" style="gap: 10px">
                    <!-- progress -->
                    <div class="flex flex-row justify-content-center" style="padding: 10px;">
                        <div class="flex flex-column w-4rem justify-content-center align-items-center" style="height: 75px; gap:10px">
                            <div class="flex flex-column progress-badge">
                                <p class="inter-normal text-white" style="font-size: 20px; font-weight: 600;">20</p>
                            </div>
                            <div class="progress-bar w-full" style="height: 15px; border-radius: 10px 0px 0px 10px;"></div>
                        </div>
                        <div class="flex flex-column w-4rem justify-content-center align-items-center" style="height: 75px; gap:10px">
                            <div class="flex flex-column progress-badge">
                                <p class="inter-normal text-white" style="font-size: 20px; font-weight: 600;">40</p>
                            </div>
                            <div class="progress-bar w-full" style="height: 15px;"></div>
                        </div>
                        <div class="flex flex-column w-4rem justify-content-center align-items-center" style="height: 75px; gap:10px">
                            <div class="flex flex-column progress-badge">
                                <p class="inter-normal text-white" style="font-size: 20px; font-weight: 600;">60</p>
                            </div>
                            <div class="progress-bar w-full" style="height: 15px;"></div>
                        </div>
                        <div class="flex flex-column w-4rem justify-content-center align-items-center" style="height: 75px; gap:10px">
                            <div class="flex flex-column progress-badge">
                                <p class="inter-normal text-white" style="font-size: 20px; font-weight: 600;">80</p>
                            </div>
                            <div class="progress-bar w-full" style="height: 15px;"></div>
                        </div>
                        <div class="flex flex-column w-4rem justify-content-center align-items-center" style="height: 75px; gap:10px">
                            <div class="flex flex-column progress-badge">
                                <p class="inter-normal text-white" style="font-size: 20px; font-weight: 600;">100</p>
                            </div>
                            <div class="progress-bar w-full" style="height: 15px; border-radius: 0px 10px 10px 0px;"></div>
                        </div>
                    </div>
                    <!-- task list -->
                    <div class="flex flex-column" style="gap: 10px; margin-top: 10px" v-for="task in dailyTasks" :key="task.id">
                        <div class="flex flex-column">
                            <div class="grid align-items-center justify-content-center">
                                <div class="col-8 lg:col-8">
                                    <p>{{ task.name }}</p>
                                    <p>{{ task.description }}</p>
                                </div>
                                <button class="col-4 lg:col-2 btn-add" style="width: 99px; height: 39px;" 
                                 :class="{'btn-achieved': task.achieved, 'btn-go': !task.achieved}">
                                    <span class="mx-auto">{{ task.achieved ? 'Achieved' : 'Go' }}</span>
                                  </button>
                            </div>
                            <div class="line" style="margin-bottom: 10px"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- badge and exam scheduele section -->
            <div class="col-12 md:col-4 flex flex-column" style="gap: 20px">
                <!-- badge -->
                <p class="inter-normal black-2" style="font-size: 25px; font-weight: 700;">Badge</p>
                <div class="bg-white input-card flex flex-column">
                    <!-- header -->
                    <div class="flex flex-row justify-content-between -mt-2">
                        <p class="inter-normal black-1" style="font-size: 20px; font-weight: 700;">Top 3 badge achieved </p>
                        <Button link size="small" class="font-bold text-xl flex gap-2 p-0">
                            <span class="inter-normal black-1 -mr-2" style="font-size: 20px; font-weight: 700;">see
                                all</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H16.1893L13.4697 8.53033Z"
                                    fill="black" />
                            </svg>
                        </Button>
                    </div>
                    <!-- image and text -->
                    <div class="flex flex-row" style=" padding-top: 10px">
                        <div class="flex flex-column align-items-center" style="gap: 10px;">
                            <img src="assets/img/badge/badge-student-social-media-specialist.png" alt=""
                            style="width: 117px; height: 117px;">
                            <p class="inter-normal black-2" style="font-size: 8px;
                             font-weight: 700;">Social Media Specialist</p>
                        </div>
                        <div class="flex flex-column align-items-center" style="gap: 10px">
                            <img src="assets/img/badge/badge-student-email-marketting-specialist.png" alt=""
                            style="width: 117px; height: 117px;">
                            <p class="inter-normal black-2" style="font-size: 8px;
                             font-weight: 700;">Social Media Specialist</p>
                        </div>
                        <div class="flex flex-column align-items-center" style="gap: 10px">
                            <img src="assets/img/badge/badge-student-search-marketting-specialist.png" alt=""
                            style="width: 117px; height: 117px;">
                            <p class="inter-normal black-2" style="font-size: 8px;
                             font-weight: 700;">Social Media Specialist</p>
                        </div>
                    </div>
                </div>
                <!-- exam scheduele -->
                <p class="inter-normal black-2" style="font-size: 25px; font-weight: 700;">Exam Schedule</p>
                <div class="bg-white input-card flex flex-column py-0">
                    <div class="flex flex-column" style="padding: 10px 10px" v-for="exam in examSchedules" :key="exam.id">
                        <div class="grid align-items-center">
                            <div class="col-1 align-items-center" 
                             style="border-radius: 10px; border: 1px solid #000; width: 50px; height: 50px; padding: 0px 13px">
                                <p class="inter-normal black-2" style="font-size: 20px; font-weight: 600;">{{ exam.day }}</p>
                                <p class="inter-normal black-2" style="font-size: 10px; font-weight: 600;">{{ exam.month }}</p>
                            </div>
                            <div class="col-7">
                                <p class="inter-normal black-2" style="font-size: 20px; font-weight: 600;">{{ exam.name}}</p>
                                <p class="inter-normal grey-1" style="font-size: 14px; font-weight: 600;">{{ exam.time }}</p>
                            </div>
                            <button class="btn-add col-4">
                                <span>Attend</span>
                            </button>
                        </div>
                        <div class="line"></div>
                    </div>
                </div>
            </div>
            <!-- calander and activities section -->
            <div class="col-12 md:col-4 flex flex-column">
                <!-- Calander -->
                <div class="flex flex-column" style="gap: 10px">
                    <p class="inter-normal black-2" style="font-size: 25px; font-weight: 700; margin-bottom: 10px">Calendar</p>
                    <div class="flex justify-content-center">
                        <CustomCalendar @date-select="onClickDay" :markers="dataEvent" />
                    </div>
                </div>
    
                <!-- Activities -->
                <div class="flex flex-column gap-2 py-2">
    
                    <div class="flex flex-row gap-2 text-lg align-items-center">
                        <i class="pi pi-calendar text-xl"></i>
                        <p class="inter-normal black-2" style="font-size: 20px; font-weight: 700;">{{ selectedDate }}</p>
                        <p class="inter-normal black-2" style="font-size: 20px; font-weight: 700;">({{ activitiesList.length }}
                            activities)</p>
                    </div>
    
                    <div>
                        <VirtualScroller :items="activitiesList" :itemSize="50" style="height: 290px">
                            <template v-slot:item="{ item }">
                                <Card class="border-1 shadow-0 border-round mb-2 p-0 m-0 card mr-3" style="box-shadow: none;">
                                    <template #content>
                                        <p class="inter-normal suggested-orange" style="font-size: 16px; font-weight: 700;">{{
                                            item.start_time }} - {{item.end_time }}</p>
                                        <p class="poppins-normal black-2"
                                            style="font-size: 18px; font-weight: 500; letter-spacing: 0.54px;">{{ item.activity
                                            }}</p>
                                    </template>
                                </Card>
                            </template>
                        </VirtualScroller>
                    </div>
                </div>
            </div>
            <!-- courses section -->
            <div class="flex flex-column" style="margin: 10px 0px; gap: 10px">
                <div class="flex flex-row" style="gap: 10px">
                    <Button size="small" class="btn-header min-w-max active">
                        <p class="inter-normal text-white" style="font-size: 16px; font-weight: 600;">Home</p>
                    </Button>
                    <Button size="small" class="btn-header min-w-max">
                        <p class="inter-normal text-white" style="font-size: 16px; font-weight: 600;">In Progress</p>
                    </Button>
                    <Button size="small" class="btn-header min-w-max">
                        <p class="inter-normal text-white" style="font-size: 16px; font-weight: 600;">Compeleted</p>
                    </Button>
                </div>
                <CoursesDashboard></CoursesDashboard>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import "/src/assets/global.scss";
.input-card {
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ECEEF5;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.progress-badge {
    display: flex;
    width: 50px;
    height: 50px;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid var(--Suggested-dark-grey, #808081);
    background: var(--Suggested-dark-grey, #808081);
}

.progress-bar {
    border: 1px solid var(--Suggested-grey, #D9D9D9);
    background: var(--Suggested-dark-grey, #808081);
}

.btn-add {
    display: flex;
    padding: 10px;
    align-items: center;
    gap: 10px;
    width: 85px;
    height: 40px;
    border-radius: 6px;
    cursor: pointer;
    background: var(--Suggested-Pass-Color, #E26954);
    border: none;
  
    span {
      padding: 0;
      color: var(--backgrounds-primary, #FFF);
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
    }
  }
.line {
    height: 1px;
    flex-shrink: 0;
    align-self: stretch;
    background: #D9D5EC;
}

/* Calander */
::v-deep(.calendar) {
    max-height: 500px;
    border-radius: 20px;
    border: 1px solid #D9D5EC;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    .p-datepicker-calendar table td {
        padding: 0.25rem !important;
    }

    .p-datepicker {
        overflow: hidden;
    }

    table tr th {
        background: rgba(250, 250, 250, 0.50);
    }

    table tr td {
        width: 50px;
        height: 50px;
        padding: 5px;
        margin: 5px;
        background: white;

        >span {
            border-radius: 5px;
            width: 50px;
            height: 55px;
            font-size: 15px;
            background: rgba(250, 250, 250, 0.50);
        }

        >span:focus {
            box-shadow: none;
            background: #E96853;
            color: white;
        }

        >span.p-highlight {
            background: #E96853;
            color: white;
        }

        >span:not(.p-highlight) .badge {
            background: #E96853;
            color: white;
            border-radius: 50%;

            &:hover {
                background: #E96853;
            }
        }

        >span.p-highlight .badge {
            background: white;
            color: #E96853;
            border-radius: 16px;
        }
    }

    &:not(.p-disabled)table td span:not(.p-highlight):not(.p-disabled)table td span:hover {
        background: #E96853 !important;
    }

    .p-datepicker {
        overflow: hidden;
        border-radius: 20px;
    }

    .p-datepicker-header {
        padding: 0 0.5rem;
    }
}

/* Virtual Scroller */
::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-thumb {
    background: #E96853;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #E96853;
}

@media (min-width: 1400px) {
    ::v-deep(.calendar) {
        width: 450px;

        table td>span {
            width: 50px;
            height: 50px;
            font-size: 15px;
        }
    }
}

.btn-header {
    height: 40px;
    font-size: 16px;
    border-radius: 6px;
    border: 1px solid #006785;
    background: transparent !important;
  
    p {
      color: #006785 !important;
    }
  
    i {
      color: #006785;
    }
  
    &:hover,
    &.active {
      background: #006785 !important;
  
      p {
        color: unset !important;
      }
  
      i {
        color: white;
      }
    }
  }

  .btn-achieved {
    background-color: #D9D9D9;
  }
  
  .btn-go {
    background-color: #E26954;
  }
</style>