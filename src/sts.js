function STS(selectData){ 
  
  window.addEventListener('DOMContentLoaded', main)

  function main(){

    const primaryDom = $('#sts_wrap [data-primary="true"]')
    const subDom = $('#sts_wrap select:not([data-primary="true"])')
    const values = getValuesByKey(selectData, primaryDom.getAttribute('data-key'))
    // render primary and sub select 
    primaryDom.innerHTML = getOptionsByArray(values)
    subDom.innerHTML = getOptionsByArray(selectData[0][subDom.getAttribute('data-key')])

    // handle change primary select
    primaryDom.addEventListener('change', e => onChangePrimary(e, primaryDom, subDom))

  }

  function onChangePrimary(e, primaryDom, subDom){
    const key = primaryDom.getAttribute('data-key')
    const subKey = subDom.getAttribute('data-key')
    const value = e.target.value
    const subValues = getArrayByEqual(selectData, key, value, subKey)
    subDom.innerHTML = getOptionsByArray(subValues)
  }

  function $(selector){
    return document.querySelector(selector)
  }

  function getArrayByEqual(array, key, value, subKey){
    for(let i in array){
      if(array[i][key] === value){
        return array[i][subKey]
        break
      }
    }
  }

  function getValuesByKey(array, key, i){
    const returnArr = []
    for(let i in array){
      returnArr.push(array[i][key])
    }
    return returnArr
  }

  /**
   * params: [value...]
   * return: string 
   */
  function getOptionsByArray(array){
    let options = ''
    for(let i in array){
      options += renderOptionTpl(array[i])
    }
    return options
  }

  function renderOptionTpl(value){
    return `<option value='${value}'>${value}</option>`
  }
}