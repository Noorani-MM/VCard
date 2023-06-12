<template>
  <Detail title="skills" description="What I do as a software engineer">
    <div class="card bg-base-100 image-full">
      <figure>
        <img src="/images/skill.jpg" alt="programming" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Programming</h2>
        <table class="table table-xs">
          <thead>
            <tr>
              <th>Language</th>
              <th>Grade</th>
              <th>Framework</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PHP</td>
              <td>
                <Rating :id="1" :rate="5" />
              </td>
              <td>Laravel</td>
              <td>
                <Rating :id="2" :rate="5" />
              </td>
            </tr>
            <tr>
              <td>C#</td>
              <td>
                <Rating :id="3" :rate="5" />
              </td>
              <td>.Netframework</td>
              <td>
                <Rating :id="4" :rate="5" />
              </td>
            </tr>
            <tr>
              <td>Javascript</td>
              <td>
                <Rating :id="5" :rate="4" />
              </td>
              <td>Nuxt</td>
              <td>
                <Rating :id="6" :rate="4" />
              </td>
            </tr>
            <tr>
              <td>CSS</td>
              <td>
                <Rating :id="7" :rate="4" />
              </td>
              <td>Tailwind CSS</td>
              <td>
                <Rating :id="8" :rate="4" />
              </td>
            </tr>
            <tr>
              <td>Python</td>
              <td>
                <Rating :id="9" :rate="3" />
              </td>
              <td>Django</td>
              <td>
                <Rating :id="10" :rate="0" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Detail>
</template>