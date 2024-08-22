import React from 'react'
import './Flowchart.css'

const Flowchart = () => {
  return (
    <div> 
        <div class="level-1">
            <button>US Cleaning</button>
            <button class="ins"><div class='insp'>Inspection</div></button>
            <button>Vacuum Baking</button>
            <button>Quarantine Storage</button>
            </div>
            <div class="level-2">
            <button>Window Assembly</button>
            <button>Switch, Buzzer, Vent</button>
            <button>Breather Port Assembly</button>
            <button>Exhaust Nozzle Assembly</button>
            <button>Manifold Assembly</button>
            <button>Solenoid Assembly</button>
            <button>Pump Assembly</button>
            <button>Fine Filter Assembly</button>
            <button>Permeatation Assembly</button>
            <button>Interface Block Assembly</button>
            <button>Micro Heater Assembly</button>
            <button>Ni Holder Assembly</button>
            <button>Shutter Grid Assembly</button>
            <button>Faraday Cup Assembly</button>
            </div>
            <div class="level-3">
            <button>Front Plate Assembly</button>
            </div>
            <div class="level-4">
            <button>Handle Assembly</button>
            <button>Inlet Valve Assembly</button>
            </div>
            <div class="level-5">
            <button>Mol Seive Assembly</button>
            </div>
            <div class="level-6">
            <button>G Membrane </button>
            <button>H Membrane</button>
            </div>
            <div class="level-7">
            <button class="dotted">Drift Tube Assembly</button>
            <button class="diamond"><div class="lt">Leak Test</div></button>
            <button>Drift Tube Block Assembly</button>
            </div>
            <div class="level-8">
              <button>Dummy Membrane Assembly</button>
            </div>
            <div class="level-9">
            <button>Body Heater Cable Assembly,<br />
                Nozzle Temperature Sensor Assembly,<br />
                Nozzle Heater Cable Assembly,<br />
                Body Temperature Sensor Assembly,<br />
                Pressure Sensor Assembly,<br />
                Stack Assembly-High Voltage Board, Pre Amplifier <br />
            </button>
            </div>
            <div class="level-10">
            <button>CAM Internal Assembly</button>
            </div>
            <div class="level-11">
            <button >CAM Assembly</button>
            <button>Battery Chamber / Converter Assembly</button>
            </div>
            <div class="level-12">
            <button>SICAD / FCAD / INCD</button>
            <button class="pt"><div class="prt">Production Testing</div></button>
            </div>
            <div class="level-13">
              <button>Submission for QA</button>
            </div>
            <div>
            {/* vertical lines */}
            <div class ="line line-vertical line-v-1"></div>
            <div class ="line line-vertical line-v-2"></div>
            <div class ="line line-vertical line-v-3"></div>
            <div class ="line line-vertical line-v-4"></div>
            <div class ="line line-vertical line-v-5"></div>
            <div class ="line line-vertical line-v-6"></div>
            <div class ="line line-vertical line-v-7"></div>
            <div class ="line line-vertical line-v-8"></div>
            <div class ="line line-vertical line-v-9"></div>
            <div class ="line line-vertical line-v-10"></div>
            <div class ="line line-vertical line-v-11"></div>
            </div>
            
            {/* vertical-arrow */}
            <div>
            <div class ="line line-vertical line-v-12"></div>
            <div class ="line line-vertical line-v-13"></div>
            <div class ="line line-vertical line-v-14"></div>
            <div class ="line line-vertical line-v-15"></div>
            <div class ="line line-vertical line-v-16"></div>
            <div class ="line line-vertical line-v-17"></div>
            <div class ="line line-vertical line-v-18"></div>
            <div class ="line line-vertical line-v-19"></div>
            <div class ="line line-vertical line-v-20"></div>
            <div class ="line line-vertical line-v-21"></div>
            <div class ="line line-vertical line-v-22"></div>
            <div class ="line line-vertical line-v-23"></div>
            <div class ="line line-vertical line-v-24"></div>
            <div class ="line line-vertical line-v-25"></div>
            </div>

            {/* small-vertical-arrows top most */}
            <div>
            <div class ="line line-vertical line-v-26"></div>
            <div class ="line line-vertical line-v-27"></div>
            <div class ="line line-vertical line-v-28"></div>
            </div>

            <div>
            <div class ="line line-vertical line-v-29"></div>
            <div class ="line line-vertical line-v-30"></div>
            <div class ="line line-vertical line-v-31"></div>
            <div class ="line line-vertical line-v-32"></div>
            </div>

            <div>
            <div class ="line line-vertical line-v-33"></div>
            <div class ="line line-vertical line-v-34"></div>
            <div class ="line line-vertical line-v-35"></div>
            <div class ="line line-vertical line-v-36"></div>
            <div class ="line line-vertical line-v-37"></div>
            <div class ="line line-vertical line-v-38"></div>
            </div>

            <div>
            <div class ="line line-vertical line-v-39"></div>
            <div class ="line line-vertical line-v-40"></div>
            <div class ="line line-vertical line-v-41"></div>
            {/* <div class ="line line-vertical line-v-42"></div> */}
            <div class ="line line-vertical line-v-43"></div>
            <div class ="line line-vertical line-v-44"></div>
            <div class ="line line-vertical line-v-45"></div>
            <div class ="line line-vertical line-v-46"></div>
            <div class ="line line-vertical line-v-47"></div>
            <div class ="line line-vertical line-v-48"></div>
            <div class ="line line-vertical line-v-49"></div>
            <div class ="line line-vertical line-v-50"></div>
            <div class ="line line-vertical line-v-51"></div>
            </div>

            {/* horizontal */}
            <div>
            <div class ="line line-horizontal line-h-1"></div>
            <div class ="line line-horizontal line-h-2"></div>
            <div class ="line line-horizontal line-h-3"></div>
            <div class ="line line-horizontal line-h-4"></div>
            <div class ="line line-horizontal line-h-5"></div>
            <div class ="line line-horizontal line-h-6"></div>
            <div class ="line line-horizontal line-h-7"></div>
            <div class ="line line-horizontal line-h-8"></div>
            <div class ="line line-horizontal line-h-9"></div>
            <div class ="line line-horizontal line-h-10"></div>
            <div class ="line line-horizontal line-h-11"></div>
            <div class ="line line-horizontal line-h-12"></div>
            <div class ="line line-horizontal line-h-13"></div>
            <div class ="line line-horizontal line-h-14"></div>
            <div class ="line line-horizontal line-h-15"></div>
            <div class ="line line-horizontal line-h-16"></div>
            <div class ="line line-horizontal line-h-17"></div>
            <div class ="line line-horizontal line-h-18"></div>
            <div class ="line line-horizontal line-h-19"></div>
            <div class ="line line-horizontal line-h-20"></div>
            <div class ="line line-horizontal line-h-21"></div>
            <div class ="line line-horizontal line-h-22"></div>
            <div class ="line line-horizontal line-h-23"></div>
            <div class ="line line-horizontal line-h-24"></div>
            <div class ="line line-horizontal line-h-25"></div>
            <div class ="line line-horizontal line-h-26"></div>
            <div class ="line line-horizontal line-h-27"></div>
            <div class ="line line-horizontal line-h-28"></div>
            </div>

            {/* arrows */}
            <div>
            <div class ="arrow arrow-down arrow-v-1"></div>
            <div class ="arrow arrow-down arrow-v-2"></div>
            <div class ="arrow arrow-down arrow-v-3"></div>
            <div class ="arrow arrow-down arrow-v-4"></div>
            <div class ="arrow arrow-down arrow-v-5"></div>
            <div class ="arrow arrow-down arrow-v-6"></div>
            <div class ="arrow arrow-down arrow-v-7"></div>
            <div class ="arrow arrow-down arrow-v-8"></div>
            <div class ="arrow arrow-down arrow-v-9"></div>
            <div class ="arrow arrow-down arrow-v-10"></div>
            <div class ="arrow arrow-down arrow-v-11"></div>
            <div class ="arrow arrow-down arrow-v-12"></div>
            <div class ="arrow arrow-down arrow-v-13"></div>
            <div class ="arrow arrow-down arrow-v-14"></div>
            <div class ="arrow arrow-down arrow-v-15"></div>
            <div class ="arrow arrow-down arrow-v-16"></div>
            <div class ="arrow arrow-down arrow-v-17"></div>
            <div class ="arrow arrow-down arrow-v-18"></div>
            <div class ="arrow arrow-down arrow-v-19"></div>
            <div class ="arrow arrow-down arrow-v-20"></div>
            <div class ="arrow arrow-down arrow-v-21"></div>
            <div class ="arrow arrow-down arrow-v-22"></div>
            <div class ="arrow arrow-down arrow-v-23"></div>
            <div class ="arrow arrow-down arrow-v-24"></div>
            <div class ="arrow arrow-down arrow-v-25"></div>
            <div class ="arrow arrow-down arrow-v-26"></div>

            <div class ="arrow arrow-right arrow-h-1"></div>
            <div class ="arrow arrow-right arrow-h-2"></div>
            <div class ="arrow arrow-right arrow-h-3"></div>
            <div class ="arrow arrow-right arrow-h-4"></div>
            <div class ="arrow arrow-right arrow-h-5"></div>

            <div class ="arrow arrow-right arrow-h-6"></div>
            <div class ="arrow arrow-right arrow-h-7"></div>
            <div class ="arrow arrow-right arrow-h-8"></div>
            <div class ="arrow arrow-right arrow-h-9"></div>
            </div>
    </div>
  )
}

export default Flowchart