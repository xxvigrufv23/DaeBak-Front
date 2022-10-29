<template>
<v-row>
    <v-col width="374">
   <v-card
    @click="gotoMoglyeonPage()"
    :loading="loading"
    class="mx-auto my-12 mr-10"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="../assets/img/img_store_photo_1.png"
    ></v-img>

    <v-card-title>대박정육점 목련점</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • Korea, butcher's shop
      </div>

      <div>소고기, 돼지고기, 소고기 특수부위, 돼지고기 특수부위 전문점</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>InFormaiton</v-card-title>

    <v-card-text>
      <v-chip-group
 
      >
              <v-btn class="ml-15 pl-15" icon>
                <v-icon color ="red">mdi-heart</v-icon>
              </v-btn>

              <v-btn class=" pl-10" icon>
                <v-icon color ="blue">mdi-bookmark</v-icon>
              </v-btn>

              <v-btn class="pl-10" icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
      </v-chip-group>
    </v-card-text>

    <v-card-actions class="ml-16 pl-16">
        <v-btn icon>
          <v-icon class="mb-3 ml-14" color="green">mdi-phone</v-icon>
          <p>042-123-4569</p>
          </v-btn>
    </v-card-actions>
  </v-card>
  </v-col>
    <v-col>
   <v-card
   @click="gotoDomaPage()"
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="../assets/img/img_store_photo_2.png"
    ></v-img>

    <v-card-title>대박정육점 도마점</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.6 (313)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • Korea, butcher's shop
      </div>

      <div>돼지고기, 닭고기 당일도축 소고기(뭉티기,육회) 전문점</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>InFormation</v-card-title>

    <v-card-text>
      <v-chip-group

      >
              <v-btn class="ml-15 pl-15" icon>
                <v-icon color ="red">mdi-heart</v-icon>
              </v-btn>

              <v-btn class=" pl-10" icon>
                <v-icon color ="blue">mdi-bookmark</v-icon>
              </v-btn>

              <v-btn class="pl-10" icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
      </v-chip-group>
    </v-card-text>

    <v-card-actions class="ml-16 pl-16">
        <v-btn icon>
          <v-icon class="mb-3 ml-14" color="green">mdi-phone</v-icon>
          <p>042-123-4569</p>
          </v-btn>
    </v-card-actions>
  </v-card>
  </v-col>
      <v-col width="374">
   <v-card
    @click="gotoHyangchonPage()"
    :loading="loading"
    class="mx-auto my-12 ml-10"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="../assets/img/img_store_photo_3.png"
    ></v-img>

    <v-card-title>대박정육점 향촌점</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.7 (213)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • Korea, butcher's shop
      </div>

      <div>소고기, 돼지고기, 소고기 특수부위, 돼지고기 특수부위,오리고기,닭고기 전문점 </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>InFormaiton</v-card-title>

    <v-card-text>
      <v-chip-group
 
      >
              <v-btn class="ml-15 pl-15" icon>
                <v-icon color ="red">mdi-heart</v-icon>
              </v-btn>

              <v-btn class=" pl-10" icon>
                <v-icon color ="blue">mdi-bookmark</v-icon>
              </v-btn>

              <v-btn class="pl-10" icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
      </v-chip-group>
    </v-card-text>

    <v-card-actions class="ml-16 pl-16">
        <v-btn icon>
          <v-icon class="mb-3 ml-14" color="green">mdi-phone</v-icon>
          <p>042-123-4569</p>
          </v-btn>
    </v-card-actions>
  </v-card>
  </v-col>
 
</v-row>

</template>

 <script>
 export default {
    name: 'Storeinfo',
    data(){
      return{
        moglyeon: '목련점',
        doma: '도마점',
        hyangchon:'향촌점',
      }
    },
    methods: {
      gotoDomaPage() {
        this.$router.push('doma');
      },
      gotoHyangchonPage() {
        this.$router.push('hyungchon');
      },
      gotoMoglyeonPage() {
        this.$router.push('mokryun');
      }
    }
}


</script>

<style >
@import url("@/assets/fonts/font.css");
.storeinfofont{
  font-family: 'ulsanjunggu';
}
</style>